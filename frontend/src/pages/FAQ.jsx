import Meta from "../components/Meta";

export default function FAQ() {
  const items = [
    {
      q: "What methodologies do you use?",
      a: "We run end‑to‑end studies: expert interviews, focus groups, surveys, experiments, conjoint, pricing, and advanced analytics.",
    },
    {
      q: "Do you support qualitative analysis in NVivo?",
      a: "Yes—our team uses NVivo for coding, theming, and traceable insights across transcripts and artifacts.",
    },
    {
      q: "How quickly can we start?",
      a: "Discovery can begin this week; timelines depend on scope and audience access.",
    },
  ];
  return (
    <main id="main" className="max-w-3xl mx-auto px-4 py-12">
      <Meta title="FAQ" />
      <h1 className="text-3xl font-bold">FAQ</h1>
      <div className="mt-6 divide-y">
        {items.map((it) => (
          <details key={it.q} className="py-4 group">
            <summary className="cursor-pointer font-medium focus:outline-none focus:ring rounded-2xl px-2">
              {it.q}
            </summary>
            <p className="mt-2 text-gray-700 px-2">{it.a}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
