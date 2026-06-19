import Card from "../../components/Card";
import SectionTag from "../../components/ui/SectionTag";
import GradientCircle from "../../components/ui/GradientCircle";
import OverlayStrip from "../../components/ui/OverlayStrip";
import rr_1 from "../../assets/rr_1.png";
import paypal from "../../assets/paypal.png";
import tick from "../../assets/tick.png";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function FeeFree() {
  const containerRef = useScrollAnimation({ floating: true });

  return (
    <div
      ref={containerRef}
      className="
        px-6 py-16
        sm:px-10 sm:py-24
        lg:px-18 lg:py-50
        flex justify-center items-center text-left
      "
    >
      <div
        className="
          w-full max-w-[82%]
          flex flex-col-reverse
          lg:flex-row
          justify-between
          gap-12 lg:gap-0
        "
      >
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative">
          <GradientCircle
            className="
            animate-item opacity-0 
            w-6 h-6 mr-4 hidden lg:flex"
            colors={["#52B4DA", "#1E3E85"]}
          />

          <div className="relative w-fit">
            <Card className="h-110 sm:h-120 lg:h-140 w-80 sm:w-96 lg:w-100" />

            <div
              className="
                absolute
                w-72 sm:w-88 lg:w-100
                top-0
                p-6 sm:p-8 lg:p-10
                flex flex-col
                font-medium
                gap-2
              "
            >
              <p className="text-gray-700 text-sm sm:text-base">
                Your Membership Tier
              </p>
              <p
                className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(132.56deg, #52B4DA 5.63%, #1E3E85 106.18%)",
                }}
              >
                Premium
              </p>
              <p className="text-gray-700 text-sm sm:text-base">FEATURES</p>

              <div className="flex flex-col gap-4 sm:gap-6 pt-2 text-sm sm:text-base">
                {[
                  "Up to 25 active job posts",
                  "Premium Placement & Visibility",
                  "Messaging anyone, unlimited",
                  "Unlimited invites",
                  "View all applicants",
                  "Unlimited invites to jobseekers",
                ].map((feature) => (
                  <div key={feature} className="flex flex-row items-center">
                    <GradientCircle
                      imageSrc={tick}
                      className="w-5 h-5 p-0.5 shrink-0"
                    />
                    <p className="pl-4">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <GradientCircle
              className="
                animate-item opacity-0 
                z-30
                -right-6 sm:-right-10
                absolute
                w-18 sm:w-22 lg:w-26
                h-18 sm:h-22 lg:h-26
                p-4 sm:p-5 lg:p-6
                top-1/6
              "
              roundImage={false}
              imageSrc={rr_1}
            />

            <OverlayStrip
              className="animate-item opacity-0 bottom-10 -left-10 sm:-left-16 lg:-left-20 p-6 sm:p-8 lg:p-10 w-72 sm:w-88 lg:w-100"
              colors={["#EBEDFF", "#ADB8FF"]}
              imageSrc={paypal}
              title={"Upcoming Payment In…"}
              subTitle={"14 Days - $79.99"}
              gradientCircleClassName="p-3 sm:p-4 w-12 sm:w-16 object-fit"
              roundImage={false}
            />
          </div>
        </div>

        <div className="flex flex-col py-4 sm:py-6 gap-6 sm:gap-8 w-full lg:w-[50%] text-left">
          <SectionTag name={"Actually Fee Free"} />
          <div className="text-3xl sm:text-4xl lg:text-5xl font-medium">
            Fee-Free Forever
          </div>
          <div className="text-lg sm:text-xl lg:text-2xl leading-8 sm:leading-10 lg:leading-11">
            We don't charge you fees and we don't put up paywalls. We're the
            bridge that connects job opportunities with the best candidates,
            with no middleman involved.
          </div>
        </div>
      </div>
    </div>
  );
}
