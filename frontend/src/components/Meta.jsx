import { useEffect } from "react";
import { site } from "../data/site";

export default function Meta({ title, description }) {
  useEffect(() => {
    if (title) document.title = `${title} • ${site.name}`;
  }, [title]);
  return (
    <>
      <meta name="description" content={description || site.tagline} />
      <meta
        property="og:title"
        content={title ? `${title} • ${site.name}` : site.name}
      />
      <meta property="og:description" content={description || site.tagline} />
    </>
  );
}
