const collections = ["New arrivals", "Clothing", "Accessories", "Home & living"];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#24352b]">
      <div className="bg-[#24352b] px-4 py-2 text-center text-xs text-white">Welcome to Lina Store — thoughtfully chosen for everyday living</div>
      <header className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-6">
        <a href="/" className="font-serif text-3xl font-bold">lina<span className="text-[#bd845d]">.</span></a>
        <nav aria-label="Main navigation" className="hidden gap-8 text-sm md:flex">
          {collections.map((item) => <a key={item} href="#collections" className="hover:text-[#a46442]">{item}</a>)}
        </nav>
        <a href="mailto:hello@linastore.com" className="rounded-full border border-[#24352b] px-5 py-2 text-sm hover:bg-[#24352b] hover:text-white">Contact us</a>
      </header>
      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-12 md:grid-cols-2 md:pt-24">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#a46442]">The Lina edit</p>
            <h1 className="max-w-xl font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">Little things, beautifully considered.</h1>
            <p className="mt-7 max-w-md leading-8 text-[#667168]">Discover pieces made to bring more ease, warmth, and personality to your everyday.</p>
            <a href="#collections" className="mt-9 inline-flex rounded-full bg-[#24352b] px-8 py-4 text-sm font-semibold text-white hover:bg-[#3d5845]">Explore collections <span className="ml-4" aria-hidden="true">↗</span></a>
          </div>
          <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#e7d6c1] p-10 sm:min-h-[520px]">
            <div className="absolute -bottom-16 -right-12 h-72 w-72 rounded-full bg-[#b5bd9b]" />
            <div className="relative flex h-72 w-64 rotate-[-8deg] items-center justify-center rounded-t-[7rem] rounded-b-[1.5rem] border-[12px] border-[#c08b67] bg-[#f7f0e7] shadow-2xl sm:h-80 sm:w-72">
              <span className="font-serif text-7xl italic text-[#819273]">lina</span>
            </div>
            <p className="absolute bottom-7 left-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#57604e]">Find your everyday favorite</p>
          </div>
        </section>
        <section id="collections" className="bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#a46442]">Browse Lina Store</p>
            <h2 className="mb-10 font-serif text-4xl sm:text-5xl">Explore our collections</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {collections.map((item, index) => <div key={item} className="flex min-h-56 flex-col justify-between rounded-2xl p-6" style={{ backgroundColor: ["#e8d9c6", "#dce4d5", "#eee3db", "#e1e4db"][index] }}><span className="font-serif text-6xl text-[#24352b]/25">0{index + 1}</span><h3 className="font-serif text-2xl">{item}</h3></div>)}
            </div>
          </div>
        </section>
      </main>
      <footer className="px-6 py-8 text-center text-sm text-[#667168]">© {new Date().getFullYear()} Lina Store. Made for everyday moments.</footer>
    </div>
  );
}
