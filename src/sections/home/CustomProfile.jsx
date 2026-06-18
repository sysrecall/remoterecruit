import SectionTag from "../../components/ui/SectionTag";
import Card from "../../components/Card";

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

        <div className="w-[45%] flex justify-end">
          <Card />
        </div>
      </div>
    </div>
  );
}
