
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="flex items-center justify-between p-6 md:px-16">
        <h1 className="text-2xl font-bold text-emerald-700">
          Trip Mate 🌍
        </h1>
        <a href="#explore" className="rounded-full bg-emerald-700 px-5 py-3 text-white">
          Explore
        </a>
      </nav>

      <section className="px-6 py-24 text-center md:py-32">
        <p className="font-semibold uppercase tracking-widest text-emerald-700">
          Your journey begins here
        </p>
        <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
          Discover Sri Lanka with Trip Mate.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600">
          Explore beautiful places, find travel inspiration, and plan your next adventure.
        </p>
        <a href="#explore" className="mt-8 inline-block rounded-full bg-emerald-700 px-8 py-4 font-semibold text-white">
          Start Exploring →
        </a>
      </section>

      <section id="explore" className="px-6 pb-24 md:px-16">
        <h2 className="text-3xl font-bold">Explore Sri Lanka</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["🏝️", "Trincomalee", "Discover coastal adventures."],
            ["⛰️", "Ella", "Explore mountains and scenic views."],
            ["🪨", "Sigiriya", "Discover history and culture."],
          ].map(([emoji, name, description]) => (
            <article key={name} className="rounded-2xl border bg-white p-7 shadow-sm">
              <div className="text-4xl">{emoji}</div>
              <h3 className="mt-4 text-xl font-bold">{name}</h3>
              <p className="mt-2 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t p-6 text-center text-slate-500">
        © 2026 Trip Mate · Discover Sri Lanka
      </footer>
    </main>
  );
}