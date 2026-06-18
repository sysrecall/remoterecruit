import Card from "../../components/Card";
import SectionTag from "../../components/ui/SectionTag";

export default function FeeFree() {
  return (
    <div className="p-18 flex justify-center items-center">
      <div className="w-[82%]  flex flex-row justify-between">
        <div className="w-[45%] flex justify-start">
          <Card />
        </div>

        <div className="flex flex-col py-6 gap-8 w-[50%] text-left">
          <div>
            <SectionTag name={"Actually Fee Free"} />
          </div>
          <div className="text-5xl font-medium">Fee-Free Forever</div>
          <div className="text-2xl leading-11">
            We don’t charge you fees and we don’t put up paywalls. We’re the
            bridge that connects job opportunities with the best candidates,
            with no middleman involved.
          </div>
        </div>
      </div>
    </div>
  );
}
