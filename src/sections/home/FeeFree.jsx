import Card from "../../components/Card";
import SectionTag from "../../components/ui/SectionTag";
import GradientCircle from "../../components/ui/GradientCircle";
import OverlayStrip from "../../components/ui/OverlayStrip";
import rr_1 from "../../assets/rr_1.png";
import paypal from "../../assets/paypal.png";
import tick from "../../assets/tick.png";

export default function FeeFree() {
  return (
    <div className="p-50 flex justify-center items-center text-left">
      <div className="w-[82%]  flex flex-row justify-between">
        {/* Card Section */}
        <div className="w-[45%] flex justify-end relative">
          <GradientCircle
            className="w-6 h-6 mr-6"
            colors={["#52B4DA", "#1E3E85"]}
          />

          <div className="relative">
            <Card className={"h-140"} />

            <div
              className="
              absolute
              w-100 h-100
              top-0
              p-10
              flex flex-col
              font-medium
              gap-2
            "
            >
              <p className="text-gray-700">Your Membership Tier</p>
              <p
                className="text-2xl font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(132.56deg, #52B4DA 5.63%, #1E3E85 106.18%)",
                }}
              >
                Premium
              </p>
              <p className="text-gray-700">FEATURES</p>

              <div className="flex flex-col gap-6 pt-2">
                <div className="flex flex-row ">
                  <GradientCircle imageSrc={tick} className="w-5 h-5 p-0.5" />
                  <p className="pl-4">Up to 25 active job posts</p>
                </div>
                <div className="flex flex-row">
                  <GradientCircle imageSrc={tick} className="w-5 h-5 p-0.5" />
                  <p className="pl-4">Premium Placement & Visibility</p>
                </div>
                <div className="flex flex-row">
                  <GradientCircle imageSrc={tick} className="w-5 h-5 p-0.5" />
                  <p className="pl-4">Messaging anyone, unlimited</p>
                </div>
                <div className="flex flex-row">
                  <GradientCircle imageSrc={tick} className="w-5 h-5 p-0.5" />
                  <p className="pl-4">Unlimited invites</p>
                </div>
                <div className="flex flex-row">
                  <GradientCircle imageSrc={tick} className="w-5 h-5 p-0.5" />
                  <p className="pl-4">View all applicants</p>
                </div>
                <div className="flex flex-row">
                  <GradientCircle imageSrc={tick} className="w-5 h-5 p-0.5" />
                  <p className="pl-4">Unlimited invites to jobseekers</p>
                </div>
              </div>
            </div>

            <GradientCircle
              className="
                z-30
                -right-10
                absolute              
                w-26 h-26
                p-6
                top-1/6
              "
              roundImage={false}
              imageSrc={rr_1}
            />

            <OverlayStrip
              className="bottom-10 -left-20 p-10"
              colors={["#EBEDFF", "#ADB8FF"]}
              imageSrc={paypal}
              title={"Upcoming Payment In…"}
              subTitle={"14 Days - $79.99"}
              gradientCircleClassName="p-4 w-16 object-fit"
              roundImage={false}
            />
          </div>
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
