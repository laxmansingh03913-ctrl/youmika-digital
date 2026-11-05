import { useEffect } from "react";

export default function SEO({ title, description, canonicalPath = "" }) {
  useEffect(() => {
    const defaultTitle = "Youmika Digital — Premium Digital Agency | India & USA";
    const fullTitle = title ? `${title} | Youmika Digital` : defaultTitle;
    document.title = fullTitle;

    const defaultDesc = "We manage your entire business online — websites, social media, leads, bookings, and reviews — so you can focus on running your business.";
    const metaDesc = description || defaultDesc;

    // Update meta description
    let descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute("content", metaDesc);
    }

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", fullTitle);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", metaDesc);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", `https://digital.youmika.site${canonicalPath}`);

    // Update Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `https://digital.youmika.site${canonicalPath}`);
    }

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [title, description, canonicalPath]);

  return null;
}

