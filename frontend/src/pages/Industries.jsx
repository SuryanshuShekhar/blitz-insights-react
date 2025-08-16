import Meta from "../components/Meta";
import { site } from "../data/site";

export default function Industries() {
  return (
    <main id="main" className="max-w-6xl mx-auto px-4 py-12">
      <Meta title="Industries" />
      <h1 className="text-3xl font-bold">Industries We Serve</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {site.industries.map((i) => (
          <div key={i} className="rounded-2xl border p-5 bg-white">
            <h3 className="text-lg font-semibold">{i}</h3>
            <p className="text-sm text-gray-700 mt-2">
              Deep‑dive research tailored to your goals—uncover trends, needs,
              and emerging opportunities.
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border p-5 bg-white">
        <h3 className="text-lg font-semibold">
          Healthcare & Pharmaceuticals spotlight
        </h3>
        <p className="text-sm text-gray-700 mt-2">
          From KOL interviews to patient journeys and payer landscapes, we
          transform data into actionable strategies across the healthcare value
          chain.
        </p>
      </div>
    </main>
  );
}
