import Meta from "../components/Meta";
import { site } from "../data/site";

function featureBullets(slug) {
  switch (slug) {
    case "customer-insights":
      return [
        "Segmentation & personas",
        "Journey mapping",
        "Drivers of satisfaction",
        "Churn signals",
      ];
    case "brand-insights":
      return [
        "Brand health & funnel",
        "Positioning tests",
        "Concept & creative tests",
        "Share of voice",
      ];
    case "social-media-insights":
      return [
        "Listening & topic modeling",
        "Influencer mapping",
        "Campaign evaluation",
        "Crisis monitoring",
      ];
    case "win-loss-insights":
      return [
        "Buyer interviews",
        "Closed‑lost diagnostics",
        "Competitive positioning",
        "Playbook actions",
      ];
    case "competitive-insight":
      return [
        "Pricing & packaging",
        "Market maps",
        "Feature benchmarks",
        "Patent & hiring signals",
      ];
    case "market-insights":
      return [
        "TAM/SAM/SOM",
        "Demand sizing",
        "Category dynamics",
        "Forecast scenarios",
      ];
    default:
      return ["Discovery", "Analysis", "Recommendations", "Enablement"];
  }
}

export default function Services() {
  return (
    <main id="main" className="max-w-6xl mx-auto px-4 py-12">
      <Meta title="Services" />
      <h1 className="text-3xl font-bold">Our Services</h1>
      <p className="mt-2 text-gray-700">Click any card for details.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {site.services.map((s) => (
          <a
            key={s.slug}
            id={s.slug}
            href={`#${s.slug}`}
            className="group block focus:outline-none focus:ring rounded-2xl"
          >
            <div className="rounded-2xl border p-5 bg-white group-hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{s.blurb}</p>
              <ul className="list-disc ml-5 mt-3 text-sm text-gray-700 space-y-1">
                {featureBullets(s.slug).map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
