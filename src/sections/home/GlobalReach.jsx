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
      { threshold: 0.15 },
    );

    observer.observe(currentContainer);

    return () => {
      observer.disconnect();
      if (floatingAnimation) floatingAnimation.stop();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        px-6 py-16
        sm:px-10 sm:py-24
        lg:px-18
        flex justify-center items-center
      "
    >
      <div
        className="
          w-full max-w-[82%]
          flex flex-col
          lg:flex-row
          justify-between
          gap-12 lg:gap-0
        "
      >
        <div className="flex flex-col py-4 sm:py-6 gap-6 sm:gap-8 w-full lg:w-[50%] text-left">
          <SectionTag name={"Global Reach"} />

          <div className="text-3xl sm:text-4xl lg:text-5xl font-medium">
            The First Fully Global Job Board, Anywhere, Ever
          </div>

          <div className="text-lg sm:text-xl lg:text-2xl leading-8 sm:leading-10 lg:leading-11">
            RemoteRecruit connects candidates with opportunities around the
            world. With today's remote-first workforce, you need to be able to
            find the best jobs and the best people for them, wherever they may
            be.
          </div>
        </div>

        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative">
          <GradientCircle
            className="animate-item opacity-0 w-6 h-6 mr-4 hidden lg:flex"
            colors={["#52B4DA", "#1E3E85"]}
          />

          <div className="relative w-fit">
            <Card className="w-80 sm:w-96 lg:w-100 h-100 sm:h-110 lg:h-120" />

            <img
              className="
                rounded-[14px]
                absolute
                w-68 sm:w-78 lg:w-86
                h-40 sm:h-46 lg:h-50
                z-10
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
                -right-6 sm:-right-8 lg:-right-10
                absolute
                w-18 sm:w-22 lg:w-26
                h-18 sm:h-22 lg:h-26
                p-4 sm:p-5 lg:p-6
                top-2/6
              "
              roundImage={false}
              imageSrc={rr_1}
            />

            <OverlayStrip
              className="animate-item opacity-0 top-1/2 -left-10 sm:-left-12 lg:-left-15 w-72 sm:w-88 lg:w-100"
              imageSrc={gru}
              title={"Python Developer"}
              subTitle={"Felonious Gru"}
            />

            <OverlayStrip
              className="animate-item opacity-0 bottom-10 left-4 w-72 sm:w-88 lg:w-100"
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
