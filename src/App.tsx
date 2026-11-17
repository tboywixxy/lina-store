import { useEffect, useState, type CSSProperties } from "react";
import { Link, NavLink, Route, Routes, useParams, useSearchParams } from "react-router-dom";
import { store } from "./config/store";
import { useCart } from "./context/CartContext";
import { productById, products, sizes, type Product } from "./data/catalogue";
import { cartTotal, naira, orderUrl } from "./lib/checkout";
import { productImages } from "./lib/images";

function Icon({ name, size = 22 }: { name: "bag" | "arrow" | "menu" | "close" | "search"; size?: number }) {
  const common = { width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true as const };
  if (name === "bag") return <svg {...common} viewBox="0 0 24 24"><path d="M3.5 7.5h17l-1.4 13h-14zM8.5 9V6a3.5 3.5 0 0 1 7 0v3" /></svg>;
  if (name === "arrow") return <svg {...common} viewBox="0 0 24 24"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>;
  if (name === "menu") return <svg {...common} viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18" /></svg>;
  if (name === "close") return <svg {...common} viewBox="0 0 24 24"><path d="m5 5 14 14M19 5 5 19" /></svg>;
  return <svg {...common} viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m15.5 15.5 5 5" /></svg>;
}

function PageTitle({ title }: { title: string }) {
  useEffect(() => { document.title = `${title} | ${store.name}`; }, [title]);
  return null;
}

function Logo() {
  return <Link to="/" className="logo" aria-label={`${store.name} home`}>
    {store.logoUrl ? <img src={store.logoUrl} alt={store.name} className="h-9 w-auto" /> : <span>{store.shortName}<i>.</i></span>}
  </Link>;
}

function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const nav = [
    { to: "/", label: "Home", end: true },
    { to: "/shop", label: "Shop all" },
    { to: "/shop?category=gym-wear", label: "Gym wear" },
    { to: "/shop?category=accessories", label: "Accessories" },
  ];
  return <>
    <div className="announcement">GYM WEAR & FITNESS ACCESSORIES <span>·</span> ORDER THROUGH WHATSAPP</div>
    <header className="site-header">
      <div className="container flex h-[74px] items-center justify-between gap-4 md:h-[86px]">
        <button className="icon-button md:hidden" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} /></button>
        <Logo />
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {nav.map(({ to, label, end }) => <NavLink end={end} key={label} to={to} className={({ isActive }) => `nav-link ${isActive && (to === "/" || to === "/shop") ? "active" : ""}`}>{label}</NavLink>)}
        </nav>
        <div className="flex items-center gap-3">
          <Link className="hidden text-xs font-semibold uppercase tracking-[.12em] hover:text-[var(--accent)] sm:block" to="/shop">Explore the edit</Link>
          <Link to="/cart" className="cart-link" aria-label={`Shopping bag with ${count} items`}><Icon name="bag" /><span className="cart-count">{count}</span></Link>
        </div>
      </div>
      {open && <nav aria-label="Mobile navigation" className="mobile-menu">{nav.map(({ to, label }) => <Link key={label} to={to} onClick={() => setOpen(false)}>{label}<Icon name="arrow" size={18} /></Link>)}<a href={`https://wa.me/${store.whatsappNumber}`} target="_blank" rel="noopener noreferrer">WhatsApp us<Icon name="arrow" size={18} /></a></nav>}
    </header>
  </>;
}

function Footer() {
  return <footer className="footer">
    <div className="container grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr] md:py-20">
      <div><Logo /><p className="mt-5 max-w-xs text-sm leading-7 text-white/60">{store.tagline}<br />Gym wear and fitness accessories, selected for your next move.</p></div>
      <div><h3 className="footer-title">Explore</h3><div className="footer-links"><Link to="/shop">All products</Link><Link to="/shop?category=gym-wear">Gym wear</Link><Link to="/shop?category=accessories">Accessories</Link><Link to="/cart">Your bag</Link></div></div>
      <div><h3 className="footer-title">Get in touch</h3><div className="footer-links"><a href={`https://wa.me/${store.whatsappNumber}`} target="_blank" rel="noopener noreferrer">WhatsApp {store.whatsappDisplay} ↗</a>{store.email && <a href={`mailto:${store.email}`}>{store.email}</a>}{store.instagramUrl && <a href={store.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram ↗</a>}</div></div>
    </div>
    <div className="container flex flex-wrap justify-between gap-2 border-t border-white/15 py-5 text-xs text-white/45"><span>© {new Date().getFullYear()} {store.name}</span><span>Availability and delivery confirmed on WhatsApp.</span></div>
  </footer>;
}

function ImagePlaceholder({ product, compact = false }: { product: Product; compact?: boolean }) {
  return <div className="image-placeholder" role="img" aria-label={`No product photo uploaded for ${product.name}`}>
    <div className="placeholder-mark">{product.category === "accessories" ? "MOVE" : `SIZE ${product.size}`}</div>
    {!compact && <span>PHOTO COMING SOON</span>}
  </div>;
}

function ProductImage({ product, className = "" }: { product: Product; className?: string }) {
  const [broken, setBroken] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const image = productImages(product)[0];
  return <div className={`product-image ${className}`}>
    {image && !broken ? <><div className={`loading-state ${loaded ? "hidden" : ""}`} aria-hidden="true" /><img className={loaded ? "loaded" : ""} src={image} alt={product.name} loading="lazy" onLoad={() => setLoaded(true)} onError={() => setBroken(true)} /></> : <ImagePlaceholder product={product} />}
  </div>;
}

function AddButton({ product, className = "" }: { product: Product; className?: string }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  function handleAdd() {
    add(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }
  return <button type="button" onClick={handleAdd} className={`add-button ${className}`} aria-live="polite">{added ? "Added to bag ✓" : "I Want This"}<span aria-hidden="true">{added ? "" : "+"}</span></button>;
}

function ProductCard({ product }: { product: Product }) {
  return <article className="product-card">
    <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}><ProductImage product={product} /></Link>
    <div className="pt-4">
      <p className="eyebrow">{product.category === "accessories" ? "Fitness accessory" : `Gym wear / Size ${product.size}`}</p>
      <Link to={`/product/${product.id}`} className="mt-2 block min-h-12 text-[15px] font-semibold leading-snug hover:text-[var(--accent)]">{product.name}</Link>
      <div className="mt-3 flex items-center justify-between"><strong className="text-[17px]">{product.price === null ? "Price to confirm" : naira(product.price)}</strong></div>
      <AddButton product={product} className="mt-4 w-full" />
    </div>
  </article>;
}

function ProductGrid({ items }: { items: Product[] }) {
  return <div className="grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-6">{items.map((product) => <ProductCard key={product.id} product={product} />)}</div>;
}

function SectionHeading({ kicker, title, to, linkText = "View all" }: { kicker: string; title: string; to?: string; linkText?: string }) {
  return <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[var(--line)] pb-6 md:mb-10"><div><p className="eyebrow mb-3">{kicker}</p><h2 className="heading-lg">{title}</h2></div>{to && <Link className="text-link" to={to}>{linkText}<Icon name="arrow" size={17} /></Link>}</div>;
}

function Hero() {
  return <section className="hero">
    <div className="container grid min-h-[540px] md:grid-cols-[1.05fr_.95fr]">
      <div className="flex flex-col justify-center py-20 pr-6 md:py-28">
        <p className="eyebrow text-[var(--accent)]">THE MOVEMENT EDIT / 01</p>
        <h1 className="hero-title mt-6">FIND YOUR<br /><em>STRIDE.</em></h1>
        <p className="mt-7 max-w-md text-base leading-7 text-white/65">Gym wear and fitness accessories for every way you move. Find your fit, build your bag, and order on WhatsApp.</p>
        <div className="mt-10 flex flex-wrap gap-4"><Link to="/shop" className="button-accent">Shop the collection <Icon name="arrow" size={18} /></Link><Link to="/shop?category=accessories" className="button-outline-light">Explore accessories</Link></div>
      </div>
      <div className="hero-panel"><div className="hero-panel-top"><span>01 — 09</span><span>SIZE RANGE</span></div><div className="hero-panel-type">FORM<br /><span>&</span> FUNCTION</div><div className="hero-panel-bottom"><span>THE EVERYDAY ACTIVE EDIT</span><span>EST. IN MOTION</span></div></div>
    </div>
  </section>;
}

function HomePage() {
  const featured = [products[0], products[9], products[27], products[89]].filter(Boolean);
  return <><PageTitle title="Gym wear & fitness accessories" /><Hero />
    <section className="container section"><SectionHeading kicker="01 / SELECTED FOR YOU" title="The current edit" to="/shop" /><ProductGrid items={featured} /></section>
    <section className="bg-[var(--surface)] py-20 md:py-28"><div className="container"><SectionHeading kicker="02 / FIND YOUR FIT" title="Shop by size" to="/shop?category=gym-wear" linkText="All gym wear" /><div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-9">{sizes.map((size) => <Link className="size-tile" to={`/shop?category=gym-wear&size=${encodeURIComponent(size)}`} key={size}><span>SIZE</span><strong>{size}</strong><Icon name="arrow" size={16} /></Link>)}</div></div></section>
    <section className="container section"><SectionHeading kicker="03 / THE COLLECTIONS" title="Move through the edit" /><div className="grid gap-4 md:grid-cols-2"><Link to="/shop?category=gym-wear" className="category-tile category-wear"><span className="eyebrow">01 / GYM WEAR</span><strong>Find your fit.</strong><span className="category-action">Shop gym wear <Icon name="arrow" size={18} /></span></Link><Link to="/shop?category=accessories" className="category-tile category-accessories"><span className="eyebrow">02 / ACCESSORIES</span><strong>Go further.</strong><span className="category-action">Shop accessories <Icon name="arrow" size={18} /></span></Link></div></section>
    <section className="container section border-t border-[var(--line)]"><SectionHeading kicker="04 / EVERYDAY ESSENTIALS" title="Gym wear" to="/shop?category=gym-wear" /><ProductGrid items={products.filter((p) => p.category === "gym-wear").slice(3, 7)} /></section>
    <section className="container section border-t border-[var(--line)]"><SectionHeading kicker="05 / THE EXTRAS" title="Fitness accessories" to="/shop?category=accessories" /><ProductGrid items={products.filter((p) => p.category === "accessories").slice(0, 4)} /></section>
    <section className="about-band"><div className="container grid items-center gap-10 py-20 md:grid-cols-2 md:py-28"><div><p className="eyebrow">ABOUT THE STORE</p><h2 className="heading-lg mt-4">Your next move<br />starts here.</h2></div><div><p className="max-w-lg text-base leading-8 text-[var(--muted)]">Browse the catalogue, choose the pieces you want, and send your full list to us on WhatsApp. We’ll confirm what’s available, delivery fees and payment details with you directly.</p><Link className="button-dark mt-8" to="/shop">Browse all products <Icon name="arrow" size={18} /></Link></div></div></section>
  </>;
}

function ShopPage() {
  const [params, setParams] = useSearchParams();
  const category = params.get("category") ?? "all";
  const size = params.get("size") ?? "";
  const search = params.get("q") ?? "";
  const sort = params.get("sort") ?? "featured";
  function update(key: string, value: string) {
    const next = new URLSearchParams(params);
    if (value && value !== "all" && value !== "featured") next.set(key, value); else next.delete(key);
    if (key === "category" && value === "accessories") next.delete("size");
    setParams(next);
  }
  const filtered = products.filter((p) =>
    (category === "all" || p.category === category) &&
    (!size || p.size === size) &&
    (!search || `${p.name} ${p.description ?? ""} ${p.listingName}`.toLowerCase().includes(search.toLowerCase()))
  ).sort((a, b) => {
    if (sort === "low") return (a.price ?? Infinity) - (b.price ?? Infinity);
    if (sort === "high") return (b.price ?? -1) - (a.price ?? -1);
    return 0;
  });
  return <><PageTitle title="Shop all products" /><div className="page-intro"><div className="container"><p className="eyebrow text-[var(--accent)]">THE FULL COLLECTION</p><h1 className="heading-xl mt-4">Shop the edit.</h1><p className="mt-5 max-w-xl text-white/65">Explore every piece in the catalogue. Filter by category or size, then add your picks to one bag.</p></div></div>
    <main className="container section"><div className="mb-8 grid gap-3 md:grid-cols-[1fr_auto] md:items-end"><label className="search-field"><Icon name="search" size={19} /><span className="sr-only">Search products</span><input value={search} onChange={(event) => update("q", event.target.value)} placeholder="Search products" /></label><div className="flex items-center gap-3"><label htmlFor="sort" className="whitespace-nowrap text-xs font-semibold uppercase tracking-widest">Sort by</label><select id="sort" value={sort} onChange={(event) => update("sort", event.target.value)} className="select-field"><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></div></div>
      <div className="mb-5 flex flex-wrap gap-2" aria-label="Category filters">{[["all", "All products"], ["gym-wear", "Gym wear"], ["accessories", "Accessories"]].map(([value, label]) => <button type="button" key={value} onClick={() => update("category", value)} className={`filter-chip ${category === value ? "selected" : ""}`}>{label}</button>)}</div>
      {category !== "accessories" && <div className="mb-8 flex flex-wrap items-center gap-2" aria-label="Size filters"><span className="mr-2 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Size</span><button type="button" className={`size-chip ${!size ? "selected" : ""}`} onClick={() => update("size", "")}>All</button>{sizes.map((item) => <button type="button" key={item} className={`size-chip ${size === item ? "selected" : ""}`} onClick={() => update("size", item)}>{item}</button>)}</div>}
      <div className="mb-6 flex items-center justify-between border-t border-[var(--line)] pt-5"><p className="text-sm text-[var(--muted)]">{filtered.length} {filtered.length === 1 ? "product" : "products"}</p>{(category !== "all" || size || search || sort !== "featured") && <button className="text-link text-xs" onClick={() => setParams({})}>Clear filters <span aria-hidden="true">×</span></button>}</div>
      {filtered.length ? <ProductGrid items={filtered} /> : <div className="empty-state"><h2>No products found.</h2><p>Try a different search or clear your filters.</p><button className="button-dark mt-6" onClick={() => setParams({})}>Clear filters</button></div>}
    </main></>;
}

function ProductGallery({ product }: { product: Product }) {
  return <GalleryContent key={product.id} product={product} />;
}

function GalleryContent({ product }: { product: Product }) {
  const images = productImages(product);
  const [active, setActive] = useState(0);
  const [broken, setBroken] = useState<Record<string, boolean>>({});
  const available = images.filter((url) => !broken[url]);
  const selected = available[Math.min(active, available.length - 1)];
  return <div><div className="detail-image">{selected ? <img src={selected} alt={`${product.name}, image ${active + 1}`} onError={() => setBroken((current) => ({ ...current, [selected]: true }))} /> : <ImagePlaceholder product={product} />}</div>{available.length > 1 && <div className="mt-3 flex gap-3 overflow-x-auto" aria-label="Product images">{available.map((url, index) => <button type="button" key={url} className={`gallery-thumb ${index === active ? "selected" : ""}`} onClick={() => setActive(index)} aria-label={`View image ${index + 1}`}><img src={url} alt="" onError={() => setBroken((current) => ({ ...current, [url]: true }))} /></button>)}</div>}</div>;
}

function ProductPage() {
  const { id } = useParams();
  const product = id ? productById.get(id) : undefined;
  if (!product) return <><PageTitle title="Product not found" /><main className="container section empty-state"><h1>Product not found.</h1><Link className="button-dark mt-6" to="/shop">Back to shop</Link></main></>;
  return <><PageTitle title={product.name} /><main className="container section"><div className="mb-8 text-xs text-[var(--muted)]"><Link to="/shop" className="hover:text-[var(--ink)]">Shop</Link> / <span>{product.name}</span></div><div className="grid gap-10 md:grid-cols-2 lg:gap-20"><ProductGallery product={product} /><div className="flex flex-col justify-center"><p className="eyebrow">{product.category === "accessories" ? "FITNESS ACCESSORY" : `GYM WEAR / SIZE ${product.size}`}</p><h1 className="heading-lg mt-5">{product.name}</h1><p className="mt-6 text-2xl font-semibold">{product.price === null ? "Price to confirm" : naira(product.price)}</p>{product.description && <p className="mt-7 border-t border-[var(--line)] pt-6 leading-7 text-[var(--muted)]">{product.description}</p>}<dl className="mt-8 border-y border-[var(--line)] py-5 text-sm"><div className="flex justify-between"><dt className="text-[var(--muted)]">Category</dt><dd>{product.category === "accessories" ? "Accessories" : "Gym wear"}</dd></div>{product.size && <div className="mt-3 flex justify-between"><dt className="text-[var(--muted)]">Size</dt><dd>{product.size}</dd></div>}</dl><AddButton product={product} className="mt-8 w-full max-w-md" /><p className="mt-4 max-w-md text-xs leading-6 text-[var(--muted)]">{product.price === null ? "This item needs a confirmed price before WhatsApp checkout." : "Availability and delivery fees are confirmed on WhatsApp before payment."}</p><Link className="text-link mt-8 self-start" to="/shop"><span aria-hidden="true">←</span> Continue shopping</Link></div></div></main></>;
}

function CartPage() {
  const { lines, change, remove } = useCart();
  const total = cartTotal(lines);
  const checkout = orderUrl(lines);
  return <><PageTitle title="Your bag" /><main className="container section"><div className="mb-10 flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">YOUR SELECTION</p><h1 className="heading-xl mt-3">Your bag.</h1></div><Link className="text-link" to="/shop"><span aria-hidden="true">←</span> Continue shopping</Link></div>
    {!lines.length ? <div className="empty-state"><Icon name="bag" size={40} /><h2>Your bag is waiting.</h2><p>Find something you love, then add it here to send one WhatsApp enquiry.</p><Link className="button-dark mt-6" to="/shop">Explore products <Icon name="arrow" size={18} /></Link></div> :
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_340px] xl:gap-16"><div className="border-t border-[var(--line)]">{lines.map(({ product, quantity }) => <article key={product.id} className="cart-item"><Link className="w-[92px] shrink-0 sm:w-[124px]" to={`/product/${product.id}`}><ProductImage product={product} className="aspect-[4/5]" /></Link><div className="min-w-0 flex-1"><p className="eyebrow">{product.category === "accessories" ? "Accessory" : `Size ${product.size}`}</p><Link className="mt-2 block font-semibold leading-snug hover:text-[var(--accent)]" to={`/product/${product.id}`}>{product.name}</Link><p className="mt-2 text-sm text-[var(--muted)]">Unit price: {product.price === null ? "To confirm" : naira(product.price)}</p><div className="mt-4 flex flex-wrap items-center gap-4"><div className="quantity"><button type="button" onClick={() => quantity === 1 ? remove(product.id) : change(product.id, quantity - 1)} aria-label={`Decrease quantity of ${product.name}`}>−</button><span aria-live="polite">{quantity}</span><button type="button" onClick={() => change(product.id, quantity + 1)} disabled={quantity >= 99} aria-label={`Increase quantity of ${product.name}`}>+</button></div><button type="button" className="text-xs underline underline-offset-4 text-[var(--muted)] hover:text-[var(--ink)]" onClick={() => remove(product.id)}>Remove</button></div></div><strong className="hidden whitespace-nowrap text-sm sm:block">{product.price === null ? "To confirm" : naira(product.price * quantity)}</strong></article>)}</div>
        <aside className="summary"><p className="eyebrow">ORDER SUMMARY</p><div className="mt-7 flex justify-between text-sm"><span>Items ({lines.reduce((sum, line) => sum + line.quantity, 0)})</span><strong>{total === null ? "Price to confirm" : naira(total)}</strong></div><div className="mt-5 flex justify-between border-t border-[var(--line)] pt-5 text-lg font-semibold"><span>Total</span><span>{total === null ? "—" : naira(total)}</span></div><p className="mt-5 text-xs leading-6 text-[var(--muted)]">Delivery costs and product availability will be confirmed through WhatsApp. No payment is taken on this website.</p>{checkout ? <a className="button-dark mt-7 flex w-full justify-center" href={checkout} target="_blank" rel="noopener noreferrer">Buy on WhatsApp <Icon name="arrow" size={18} /></a> : <div className="mt-7"><button className="button-dark w-full cursor-not-allowed opacity-50" disabled>Buy on WhatsApp</button><p className="mt-3 text-xs leading-5 text-[var(--accent)]">One or more items have unconfirmed prices. Remove them from the bag or contact us for a price.</p><a className="text-link mt-3" href={`https://wa.me/${store.whatsappNumber}`} target="_blank" rel="noopener noreferrer">Ask about pricing <Icon name="arrow" size={16} /></a></div>}<p className="mt-4 text-center text-[11px] text-[var(--muted)]">Opening WhatsApp prepares your message. Send it there to enquire.</p></aside></div>}
  </main></>;
}

export default function App() {
  const theme = { "--ink": store.colors.ink, "--canvas": store.colors.canvas, "--accent": store.colors.accent, "--surface": store.colors.surface, "--line": store.colors.line, "--muted": store.colors.muted } as CSSProperties;
  return <div style={theme} className="min-h-screen bg-[var(--canvas)] text-[var(--ink)]"><Header /><Routes><Route path="/" element={<HomePage />} /><Route path="/shop" element={<ShopPage />} /><Route path="/product/:id" element={<ProductPage />} /><Route path="/cart" element={<CartPage />} /><Route path="*" element={<main className="container section empty-state"><h1>Page not found.</h1><Link className="button-dark mt-6" to="/">Go home</Link></main>} /></Routes><Footer /><Link className="mobile-cart-bar md:hidden" to="/cart"><span><Icon name="bag" size={19} /> View bag</span><span>{useCart().count} items <Icon name="arrow" size={17} /></span></Link></div>;
}
