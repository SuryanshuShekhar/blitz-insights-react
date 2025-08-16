import Meta from "../components/Meta";

export default function About() {
  return (
    <main id="main" className="max-w-6xl mx-auto px-4 py-12">
      <Meta title="About" />
      <h1 className="text-3xl font-bold">About Blitz Insights</h1>
      <p className="mt-4 text-gray-700 max-w-3xl">
        We’re a forward‑thinking market research and strategy partner. Our
        consultants blend qualitative depth with quantitative rigor to deliver
        tailored insights that drive growth, innovation, and market leadership.
      </p>
      <ul className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
        {[
          "Full‑service: qual + quant + analytics",
          "NVivo expertise for in‑depth qualitative analysis",
          "Actionable deliverables: playbooks, dashboards, and workshops",
        ].map((it) => (
          <li key={it} className="p-4 border rounded-2xl bg-white">
            {it}
          </li>
        ))}
      </ul>
    </main>
  );
}
