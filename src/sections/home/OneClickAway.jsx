import tick from "../../assets/tick.png";
import cross from "../../assets/cross.png";
import GradientCircle from "../../components/ui/GradientCircle";
import img_person from "../../assets/img_person.png";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const freeFeatures = [
  { label: "1 Active Job", included: true },
  { label: "Basic List Placement", included: true },
  { label: "Unlimited Job Applicants", included: false },
  { label: "Invite Anyone to Apply to Your Jobs", included: false },
];

const premiumFeatures = [
  { label: "1 Active Job", included: true },
  { label: "Basic List Placement", included: true },
  { label: "Unlimited Job Applicants", included: true },
  { label: "Invite Anyone to Apply to Your Jobs", included: true },
];

export default function OneClickAway() {
  const containerRef = useScrollAnimation({
    threshold: 0.1,
    staggerDelay: 100,
  });

  return (
    <div ref={containerRef} className="flex justify-center items-center">
      <div className="w-[90%] sm:w-[80%] lg:w-[72%] py-16 sm:py-24 lg:py-34 text-start flex flex-col gap-10 sm:gap-12 lg:gap-15">
        <div>
          <h1 className="text-xl sm:text-2xl text-center">
            Help Is Once Click Away
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-6">
          <div
            className="
              animate-item opacity-0
              w-full lg:w-[calc(50%-12px)]
              rounded-4xl
              shadow-[-14px_50px_150px_0px_rgba(49,89,211,0.12)]
              p-6 sm:p-8
              flex flex-col justify-between gap-8
            "
          >
            <div className="flex flex-row gap-4">
              <div className="bg-[#ECF2FF] w-36 sm:w-45 h-40 sm:h-50 rounded-2xl flex flex-col justify-center items-center shrink-0">
                <p className="font-bold text-3xl sm:text-4xl text-[#52B4DA]">
                  Free
                </p>
                <p className="font-medium text-xl sm:text-2xl text-gray-500">
                  Basic
                </p>
              </div>

              <div className="flex-1 pl-4 sm:pl-10">
                <div className="flex flex-col gap-4 sm:gap-6 pt-2 font-medium text-sm sm:text-[1.05em]">
                  {freeFeatures.map(({ label, included }) => (
                    <div key={label} className="flex flex-row items-center">
                      <GradientCircle
                        imageSrc={included ? tick : cross}
                        colors={
                          included
                            ? ["#52B4DA", "#1E3E85"]
                            : ["#A2A3B8", "#808191"]
                        }
                        className="w-5 sm:w-6 h-5 sm:h-6 p-0.75 shrink-0"
                      />
                      <p
                        className={`pl-3 sm:pl-4 ${!included ? "text-gray-700" : ""}`}
                      >
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundImage:
                  "linear-gradient(129.98deg, #52B4DA -106.35%, #1E3E85 95.25%)",
              }}
              className="rounded-[30px] p-0.75 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(30,62,133,0.35)]"
            >
              <a
                href="/purchase/free"
                className="
              bg-white
              hover:bg-[#ECF2FF]
                rounded-[26px]
                font-bold
                px-8 py-10
                h-11
                text-center
                flex items-center justify-center
                transition-colors duration-300
              "
              >
                Get Started
              </a>
            </div>
          </div>

          <div
            className="
              animate-item opacity-0
              w-full lg:w-[calc(50%-12px)]
              rounded-4xl
              shadow-[-14px_50px_150px_0px_rgba(49,89,211,0.12)]
              p-6 sm:p-8
              flex flex-col justify-between gap-8
            "
          >
            <div className="flex flex-row gap-4">
              <div className="relative bg-[#ECF2FF] w-36 sm:w-45 h-40 sm:h-50 rounded-2xl flex flex-col justify-center items-center shrink-0">
                <div
                  className="
                    absolute
                    -top-6
                    w-36 sm:w-40
                    h-11 sm:h-13
                    rounded-full
                    bg-[#C2EEFF]
                    flex items-center
                    px-2 sm:px-3 gap-2
                    shadow-[0px_4px_4px_0px_rgba(67,145,193,0.21)]
                  "
                >
                  <div className="flex justify-center items-center rounded-full w-9 sm:w-11 h-9 sm:h-11 bg-white shrink-0">
                    <img
                      className="p-2 sm:p-3"
                      src={img_person}
                      alt="Purchase Premium Tag Image"
                    />
                  </div>
                  <div className="flex flex-col font-bold text-sm sm:text-base">
                    Premium
                  </div>
                </div>

                <p
                  className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(132.56deg, #52B4DA 5.63%, #1E3E85 106.18%)",
                  }}
                >
                  $79.99
                </p>
                <p className="font-medium text-lg sm:text-2xl text-gray-500">
                  Per Month
                </p>
              </div>

              <div className="flex-1 pl-4 sm:pl-10">
                <div className="flex flex-col gap-4 sm:gap-6 pt-2 text-sm sm:text-base">
                  {premiumFeatures.map(({ label }) => (
                    <div key={label} className="flex flex-row items-center">
                      <GradientCircle
                        imageSrc={tick}
                        className="w-5 sm:w-6 h-5 sm:h-6 p-0.75 shrink-0"
                      />
                      <p className="pl-3 sm:pl-4">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="/purchase/paid"
              style={{
                backgroundImage:
                  "linear-gradient(129.98deg, #52B4DA -106.35%, #1E3E85 95.25%)",
                color: "white",
              }}
              className="
    w-full
    rounded-[30px]
    font-bold
    px-8 py-10
    h-11
    text-center
    flex items-center justify-center
    transition-all duration-300
    shadow-[0px_10px_30px_0px_rgba(49,89,211,0.25)]
    hover:shadow-[0px_12px_35px_0px_rgba(49,89,211,0.35)]
    hover:brightness-110
  "
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
