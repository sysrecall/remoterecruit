import lets_find_work_large from "../../assets/lets_find_work_large.png";
import arrow from "../../assets/arrow.png";
import GradientCircle from "../../components/ui/GradientCircle";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function AreYouReady() {
  const containerRef = useScrollAnimation({
    threshold: 0.1,
    staggerDelay: 120,
  });

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden min-h-115 sm:min-h-150 lg:h-180"
    >
      <div
        className="absolute inset-0 flex flex-col lg:flex-row"
        style={{
          background:
            "linear-gradient(132.56deg, rgba(87, 153, 235, 0.1) 5.63%, rgba(159, 116, 251, 0.1) 106.18%)",
        }}
      >
        <GradientCircle
          colors={["#FFED43", "#F29939"]}
          className="
            animate-item opacity-0
            w-12 sm:w-16 lg:w-18
            h-12 sm:h-16 lg:h-18
            left-8 sm:left-40 lg:left-80
            z-10
            absolute
            p-1
            top-6 sm:top-8 lg:top-10
          "
        />

        <div className="hidden lg:block relative h-[80%] top-36 w-[50%] bg-white rounded-tr-4xl">
          <img
            className="object-fit object-top pr-4 pt-4 rounded-tr-4xl antialiased"
            src={lets_find_work_large}
            alt="lets find work image"
          />
        </div>

        <div
          className="
            w-full lg:w-[50%]
            flex justify-center items-center text-left
            py-16 sm:py-24 lg:py-0
            px-6 sm:px-12 lg:px-0
          "
        >
          <div className="w-full sm:w-[80%] lg:w-[70%] gap-6 sm:gap-8 flex flex-col justify-center items-start">
            <p className="font-bold text-lg sm:text-xl">Are you ready?</p>

            <p className="font-medium text-4xl sm:text-5xl lg:text-6xl">
              Help is only a few clicks away!
            </p>

            <p className="font-medium text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-sm lg:w-100">
              Click Below to get set up super quickly and find help now!
            </p>

            <a
              href="/purchase/paid"
              className="
                w-44 sm:w-50
                h-16 sm:h-18
                rounded-full
                bg-[rgba(82,180,218,0.16)]
                hover:shadow-[14px_10px_30px_0px_rgba(49,89,211,0.12)]
                flex items-center
                px-3 gap-2
                transition-shadow duration-300
              "
            >
              <div className="rounded-full w-12 sm:w-14 h-12 sm:h-14 bg-[#52B4DA] shrink-0">
                <img className="p-3" src={arrow} alt="Get Started Button" />
              </div>
              <div className="flex flex-col leading-tight font-medium">
                Get Started
              </div>
            </a>
          </div>
        </div>

        <GradientCircle
          colors={["#52B4DA", "#1E3E85"]}
          className="
            animate-item opacity-0
            w-6 sm:w-8
            h-6 sm:h-8
            right-8 sm:right-40 lg:right-80
            z-10
            absolute
            p-1
            bottom-6 sm:bottom-10
          "
        />
      </div>
    </div>
  );
}
