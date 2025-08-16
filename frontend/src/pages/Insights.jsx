import Meta from "../components/Meta";
import { site } from "../data/site";

export default function Insights() {
  return (
    <main id="main" className="max-w-6xl mx-auto px-4 py-12">
      <Meta title="Research" />
      <h1 className="text-3xl font-bold">Research & Insights</h1>
      <p className="mt-2 text-gray-700">
        Selected posts & topics from our blog.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {site.researchPosts.map((p) => (
          <div key={p.title} className="rounded-2xl border p-5 bg-white">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-xs text-gray-500 mt-1">{p.date}</p>
            <p className="text-sm text-gray-700 mt-2">{p.excerpt}</p>
            <button className="underline text-sm mt-2">Read more →</button>
          </div>
        ))}
      </div>
    </main>
  );
}
