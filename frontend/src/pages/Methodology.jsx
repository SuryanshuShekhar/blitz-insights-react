import Meta from "../components/Meta";

export default function Methodology() {
  return (
    <main id="main" className="max-w-6xl mx-auto px-4 py-12">
      <Meta title="Methodology" />
      <h1 className="text-3xl font-bold">How We Work</h1>
      <p className="mt-4 text-gray-700 max-w-3xl">
        We combine qualitative depth (e.g., NVivo‑assisted analysis) with
        quantitative rigor (surveys, experiments, modeling) and decision‑centric
        delivery (playbooks & workshops).
      </p>
      <div id="bi-growth-engine" className="mt-8 grid md:grid-cols-4 gap-4">
        {[
          "Assess market needs",
          "Competitive pricing",
          "De‑risk decisions",
          "Right financing",
        ].map((s, i) => (
          <div key={s} className="p-4 border rounded-2xl bg-white">
            <div className="text-sm font-semibold">Step {i + 1}</div>
            <div className="mt-1 text-sm text-gray-700">{s}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
