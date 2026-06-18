import { useEffect, useRef } from "react";
import { animate, createTimeline } from "animejs";
import SectionTag from "../../components/ui/SectionTag";
import Card from "../../components/Card";
import GradientCircle from "../../components/ui/GradientCircle";
import OverlayStrip from "../../components/ui/OverlayStrip";
import gru from "../../assets/gru.png";
import rr_1 from "../../assets/rr_1.png";
import lets_find_work from "../../assets/lets_find_work.png";

export default function GlobalReach() {
  const containerRef = useRef(null);

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    let floatingAnimation = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = currentContainer.querySelectorAll(".animate-item");

          const tl = createTimeline({
            ease: "outQuad",
            complete: () => {
              floatingAnimation = animate(items, {
                y: ["0px", "-12px", "0px"],
                x: ["0px", "4px", "0px"],
                duration: 1000,
                loop: true,
                ease: "inOutSine",
                delay: (el, i) => i * 200,
              });
            },
          });

          tl.add(items, {
            opacity: [0, 1],
            y: [30, 0],
            scale: [0.95, 1],
            delay: (el, i) => i * 150,
            duration: 1000,
          });

          observer.unobserve(currentContainer);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(currentContainer);

    return () => {
      observer.disconnect();
      if (floatingAnimation) floatingAnimation.stop();
    };
  }, []);

  return (
    <div ref={containerRef} className="p-18 flex justify-center items-center">
      <div className="w-[82%] flex flex-row justify-between">
        <div className="flex flex-col py-6 gap-8 w-[50%] text-left">
          <SectionTag name={"Global Reach"} />

          <div className="text-5xl font-medium">
            The First Fully Global Job Board, Anywhere, Ever
          </div>

          <div className="text-2xl leading-11">
            RemoteRecruit connects candidates with opportunities around the
            world. With today’s remote-first workforce, you need to be able to
            find the best jobs and the best people for them, wherever they may
            be.
          </div>
        </div>

        {/* Card Section */}
        <div className="w-[45%] flex justify-end relative">
          <GradientCircle
            className="animate-item opacity-0 w-6 h-6 mr-6"
            colors={["#52B4DA", "#1E3E85"]}
          />

          <div className="relative">
            <Card />

            <img
              className="
                rounded-[14px]
                absolute w-86 h-50 z-10
                top-7
                left-7
                object-cover object-top
              "
              src={lets_find_work}
              alt="Global Reach"
            />

            <GradientCircle
              className="
                animate-item opacity-0
                z-30
                -right-10
                absolute              
                w-26 h-26
                p-6
                top-2/6
              "
              roundImage={false}
              imageSrc={rr_1}
            />

            <OverlayStrip
              className="animate-item opacity-0 top-1/2 -left-15"
              imageSrc={gru}
              title={"Python Developer"}
              subTitle={"Felonious Gru"}
            />

            <OverlayStrip
              className="animate-item opacity-0 bottom-10 left-4"
              imageSrc={gru}
              title={"Python Developer"}
              subTitle={"Felonious Gru"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
