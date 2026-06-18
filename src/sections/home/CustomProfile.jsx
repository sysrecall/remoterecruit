import SectionTag from "../../components/ui/SectionTag";
import Card from "../../components/Card";
import GradientCircle from "../../components/ui/GradientCircle";
import OverlayStrip from "../../components/ui/OverlayStrip";
import gru from "../../assets/gru.png";
import rr_1 from "../../assets/rr_1.png";
import your_profile from "../../assets/your_profile.png";

export default function CustomProfile() {
  return (
    <div className="p-18 flex justify-center items-center">
      <div className="w-[82%] flex flex-row justify-between">
        <div className="flex flex-col py-6 gap-8 w-[50%] text-left">
          <div>
            <SectionTag name={"Custom Profile"} />
          </div>
          <div className="text-5xl font-medium">Showcase Your Talents</div>
          <div className="text-2xl leading-11">
            Personalize your profile with everything that makes you unique. Add
            an introductory video and other media for a personal touch that
            stands out to employers and candidates.
          </div>
        </div>

        {/* Card Section */}
        <div className="w-[45%] flex justify-end relative">
          <GradientCircle
            className="w-6 h-6 mr-6"
            colors={["#52B4DA", "#1E3E85"]}
          />

          <div className="relative">
            <Card className={"h-140"} />

            <img
              className="
                rounded-[14px]
                absolute w-86 h-60 z-10
                top-7
                left-7
                object-cover object-top
              "
              src={your_profile}
              alt="Global Reach"
            />

            <GradientCircle
              className="
                z-30
                -right-10
                absolute              
                w-26 h-26
                p-1
                top-2/5
              "
              imageSrc={gru}
            />

            <OverlayStrip
              className="top-80 -left-15"
              imageSrc={gru}
              title={"Python Developer"}
              subTitle={"Felonious Gru"}
            />

            <div
              className="flex flex-wrap w-100
              text-white
                absolute
                bottom-4
                p-5
                gap-4
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
    <div className="bg-[#F6F4FF] w-fit text-sm font-medium rounded-lg px-4 py-2">
      <p
        className="text-sm font-medium bg-clip-text text-transparent"
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
