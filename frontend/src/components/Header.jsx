import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { site } from "../data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="text-lg font-extrabold">
            {site.name}
          </Link>
          <button
            className="md:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <ul
            className={`md:flex md:items-center gap-6 ${
              open
                ? "block absolute left-0 right-0 top-16 bg-white p-4"
                : "hidden"
            }`}
          >
            {site.nav.map((n) => (
              <li key={n.to}>
                <NavLink
                  to={n.to}
                  className={({ isActive }) =>
                    isActive
                      ? "px-2 py-1 rounded bg-slate-900 text-white"
                      : "px-2 py-1 rounded hover:bg-slate-100"
                  }
                >
                  {n.label}
                </NavLink>
              </li>
            ))}
            <li className="hidden md:block">
              <Link
                to="/contact"
                className="inline-flex items-center bg-brand text-white px-4 py-2 rounded hover:bg-brand-dark"
              >
                Talk to an expert
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
