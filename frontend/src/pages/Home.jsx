import { site } from "../data/site";
export default function Home() {
  return (
    <main id="main" className="max-w-6xl mx-auto px-4 py-12">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold">
            Data-driven decisions. Real-world impact.
          </h1>
          <p className="mt-4 text-lg text-gray-700">{site.tagline}</p>
          <div className="mt-6 flex gap-3">
            <a
              href="/contact"
              className="px-5 py-3 rounded bg-slate-900 text-white"
            >
              Start a project
            </a>
            <a href="/services" className="px-5 py-3 rounded border">
              Explore services
            </a>
          </div>
        </div>
        <figure>
          <img
            alt="abstract dashboard"
            loading="lazy"
            className="w-full rounded-lg shadow"
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop"
          />
        </figure>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">What we do</h2>
        <p className="text-gray-600 mt-2">
          Research, analytics and strategy built for growth teams.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {site.services.map((s) => (
            <div key={s.slug} className="p-6 border rounded-lg bg-white">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{s.blurb}</p>
              <a
                href={`/services#${s.slug}`}
                className="inline-block mt-3 text-sm underline"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
