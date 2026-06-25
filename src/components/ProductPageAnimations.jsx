import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NON_PRODUCT_PAGES = new Set([
  "/pages/About",
  "/pages/Contact",
  "/pages/Blog",
  "/pages/ChannelPartner",
  "/pages/HomeExhibition",
]);

function isProductRoute(pathname) {
  if (!pathname.startsWith("/pages/")) return pathname === "/products";
  return !NON_PRODUCT_PAGES.has(pathname);
}

export default function ProductPageAnimations() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isProductRoute(pathname)) return;

    const selectors = [
      ".detail-block",
      ".product-card",
      ".variant-card",
      ".feature-card",
      ".spd-container",
      ".hero-left",
      ".hero-right",
      ".hero-content",
      ".hero-image",
      ".more-products > h2",
      ".isolator-content",
      ".isolator-image",
      ".rccb-content",
      ".rccb-image",
      ".mcb-hero-content",
      ".mcb-hero-image",
      ".spd-cta",
    ].join(",");

    const elements = document.querySelectorAll(selectors);

    elements.forEach((el, index) => {
      el.classList.remove("product-visible");
      el.classList.add("product-slide-in");
      if (index % 2 === 1) {
        el.classList.add("product-slide-from-right");
      }
      el.style.setProperty("--product-delay", `${Math.min(index * 0.07, 0.45)}s`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("product-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
