import { Routes, Route, Link, useLocation } from "react-router-dom";
import SkipLink from "./components/SkipLink";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RouteChangeAnnouncer from "./components/RouteChangeAnnouncer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Methodology from "./pages/Methodology";
import Insights from "./pages/Insights";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

function NotFound() {
  return (
    <main id="main" className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p className="mt-2 text-gray-700">
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="inline-flex items-center rounded-2xl bg-gray-900 text-white px-4 py-2 mt-4"
      >
        Go home
      </Link>
    </main>
  );
}

export default function App() {
  // Respect reduced motion automatically via CSS; RouteChangeAnnouncer also announces route changes for screen readers
  return (
    <>
      <SkipLink />
      <Header />
      <RouteChangeAnnouncer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
