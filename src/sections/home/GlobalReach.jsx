import SectionTag from "../../components/ui/SectionTag";
import Card from "../../components/Card";
import GradientCircle from "../../components/ui/GradientCircle";
import OverlayStrip from "../../components/ui/OverlayStrip";

export default function GlobalReach() {
  return (
    <div className="p-18 flex justify-center items-center">
      <div className="w-[82%] flex flex-row justify-between">
        {/* LEFT TEXT */}
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

        {/* RIGHT SIDE */}
        <div className="w-[45%] flex justify-end relative">
          <GradientCircle
            className="w-6 h-6 mr-6"
            colors={["#52B4DA", "#1E3E85"]}
          />

          <div className="relative">
            <Card />

            <img
              className="
                rounded-2xl
                absolute w-86 h-50 z-10
                top-7
                left-7
                object-cover
              "
              src={"https://picsum.photos/200"}
            />

            <GradientCircle
              className="
                z-30
                -right-10
                absolute              
                w-26 h-26
                top-2/6
              "
              imageSrc={"https://picsum.photos/200"}
            />

            <OverlayStrip
              className="top-1/2 -left-15"
              imageSrc={"https://picsum.photos/200"}
              title={"Python Developer"}
              subTitle={"Felonious Gru"}
            />

            <OverlayStrip
              className="bottom-10 left-4"
              imageSrc={"https://picsum.photos/200"}
              title={"Python Developer"}
              subTitle={"Felonious Gru"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
