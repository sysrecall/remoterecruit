import SectionTag from "../../components/ui/SectionTag";
import Card from "../../components/Card";
import GradientCircle from "../../components/ui/GradientCircle";
import OverlayStrip from "../../components/ui/OverlayStrip";
import gru from "../../assets/gru.png";
import rr_1 from "../../assets/rr_1.png";
import your_profile from "../../assets/your_profile.png";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function CustomProfile() {
  const containerRef = useScrollAnimation({ floating: true });

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
          <SectionTag name={"Custom Profile"} />
          <div className="text-3xl sm:text-4xl lg:text-5xl font-medium">
            Showcase Your Talents
          </div>
          <div className="text-lg sm:text-xl lg:text-2xl leading-8 sm:leading-10 lg:leading-11">
            Personalize your profile with everything that makes you unique. Add
            an introductory video and other media for a personal touch that
            stands out to employers and candidates.
          </div>
        </div>

        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative">
          <GradientCircle
            className="
            animate-item opacity-0
            w-6 h-6 mr-4 hidden lg:flex"
            colors={["#52B4DA", "#1E3E85"]}
          />

          <div className="relative w-fit">
            <Card className="h-120 sm:h-130 lg:h-140 w-80 sm:w-96 lg:w-100" />

            <img
              className="
                rounded-[14px]
                absolute
                w-68 sm:w-78 lg:w-86
                h-44 sm:h-52 lg:h-60
                z-10
                top-7
                left-7
                object-cover object-top
              "
              src={your_profile}
              alt="Custom Profile Section Image"
            />

            <GradientCircle
              className="
              animate-item opacity-0
                z-30
                -right-6 sm:-right-8 lg:-right-10
                absolute
                w-18 sm:w-22 lg:w-26
                h-18 sm:h-22 lg:h-26
                p-1
                top-2/5
              "
              imageSrc={gru}
            />

            <OverlayStrip
              className="
              animate-item opacity-0
              top-72 sm:top-76 lg:top-80 -left-10 sm:-left-12 lg:-left-15 w-72 sm:w-88 lg:w-100"
              imageSrc={gru}
              title={"Python Developer"}
              subTitle={"Felonious Gru"}
            />

            <div
              className="
                flex flex-wrap w-72 sm:w-88 lg:w-100
                text-white
                absolute
                bottom-4
                p-4 sm:p-5
                gap-3 sm:gap-4
              "
            >
              <Tag name={"Python Dev"} />
              <Tag name={"Javascript"} />
              <Tag name={"Front end"} />
              <Tag name={"Back end"} />
              <Tag name={"IOS Development"} />
              <Tag name={"+12"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tag({ name }) {
  return (
    <div className="bg-[#F6F4FF] w-fit text-sm font-medium rounded-lg px-3 sm:px-4 py-2">
      <p
        className="text-xs sm:text-sm font-medium bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(131.63deg, #336DA6 6.87%, #1E3E85 106.04%)",
        }}
      >
        {name}
      </p>
    </div>
  );
}
