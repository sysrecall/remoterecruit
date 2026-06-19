import Button from "../../components/ui/Button";
import remote_recruit from "../../assets/remote_recruit.png";
import NavButton from "../../components/ui/NavButton";

export default function Hero() {
  return (
    <div className="min-h-dvh">
      <TopBar />
      <div className="bg-linear-to-b from-[#1E3E85] to-[#336DA6] text-white min-h-[calc(100dvh-80px)] w-full pt-24 sm:pt-36 lg:pt-44 pb-16 flex flex-col items-center px-6">
        <div className="w-full sm:w-[75%] lg:w-[54%] flex flex-col gap-6 sm:gap-8 justify-center items-center text-center">
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            RemoteRecruit's Difference
          </p>
          <p className="font-medium text-lg sm:text-xl lg:text-2xl leading-relaxed">
            RemoteRecruit is connecting the world with an easy-to-use platform
            that lets full-time, part-time, and freelance workers showcase their
            talents to businesses that need them. With no paywalls, no fees, and
            no barriers, there's nothing but you, your talents, and the next
            step in your career.
          </p>
        </div>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="flex flex-row justify-between px-6 sm:px-12 lg:px-17 py-6 sm:py-8 lg:py-10 bg-[#1E3E85] text-white">
      <img
        src={remote_recruit}
        className="h-10 sm:h-12 lg:h-15"
        alt="Remote Recruit Logo"
      />

      <div className="flex flex-row gap-4 sm:gap-6 lg:gap-10">
        <NavButton href={"/signin"} name={"Sign In"} isPrimary={false} />
        <NavButton href={"/signup"} name={"Sign Up"} />
      </div>
    </div>
  );
}
