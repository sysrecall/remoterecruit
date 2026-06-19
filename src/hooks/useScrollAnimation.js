import { useEffect, useRef } from "react";
import { animate, createTimeline } from "animejs";

/**
 * useScrollAnimation – mirrors the pattern used in GlobalReach.
 *
 * @param {object} options
 * @param {number}  options.threshold        – IntersectionObserver threshold (default 0.15)
 * @param {boolean} options.floating         – whether to add the looping float after entrance (default false)
 * @param {string}  options.selector         – CSS selector for items to animate (default ".animate-item")
 * @param {number}  options.staggerDelay     – ms between each item's entrance (default 150)
 * @param {number}  options.entranceDuration – duration of the entrance animation in ms (default 800)
 */
export function useScrollAnimation({
  threshold = 0.15,
  floating = false,
  selector = ".animate-item",
  staggerDelay = 150,
  entranceDuration = 2000,
} = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let floatingAnimation = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = container.querySelectorAll(selector);
          if (!items.length) return;

          const tl = createTimeline({
            ease: "outQuad",
            complete: () => {
              if (floating) {
                floatingAnimation = animate(items, {
                  y: ["0px", "-10px", "0px"],
                  x: ["0px", "3px", "0px"],
                  duration: 2200,
                  loop: true,
                  ease: "inOutSine",
                  delay: (el, i) => i * 180,
                });
              }
            },
          });

          tl.add(items, {
            opacity: [0, 1],
            y: [40, 0],
            scale: [0.94, 1],
            delay: (el, i) => i * staggerDelay,
            duration: entranceDuration,
          });

          observer.unobserve(container);
        }
      },
      { threshold },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (floatingAnimation) floatingAnimation.stop();
    };
  }, [selector, staggerDelay, entranceDuration, threshold, floating]);

  return containerRef;
}
