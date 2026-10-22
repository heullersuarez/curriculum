"use client";

import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function ProviderLayout({ children }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

    const textElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, button, li, label");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target;
        element.style.opacity = entry.isIntersecting ? "1" : "0";
        element.style.transform = entry.isIntersecting ? "translateY(0)" : "translateY(12px)";
      });
    }, { threshold: 0.05 });

    textElements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(12px)";
      element.style.transition = "opacity 450ms ease, transform 450ms ease";
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
