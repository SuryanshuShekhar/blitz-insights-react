import { site } from "../data/site";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold">{site.name}</h3>
          <p className="text-sm text-gray-600 mt-2">{site.tagline}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <address className="not-italic text-sm space-y-1">
            <div>{site.address}</div>
            <a href={`tel:${site.phone}`} className="underline">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="underline block">
              {site.email}
            </a>
          </address>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick links</h4>
          <ul className="space-y-1 text-sm">
            {site.nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="underline">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-6 border-t">
        © {new Date().getFullYear()} {site.name} Pvt. Ltd.
      </div>
    </footer>
  );
}
