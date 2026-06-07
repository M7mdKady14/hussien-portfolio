import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in the viewport.
 * Pass section IDs (without the #) to watch.
 *
 * Usage:
 *   const active = useScrollSpy(["about", "projects", "skills", "contact"]);
 *   // active === "projects" when that section is scrolled into view
 */
export function useScrollSpy(sectionIds: string[], offset = 80): string {
  const [active, setActive] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -60% 0px`,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return active;
}
