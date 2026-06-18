import Button from "../../components/ui/Button";
import remote_recruit from "../../assets/remote_recruit.png";
import NavButton from "../../components/ui/NavButton";

export default function Hero() {
  return (
    <div className="min-h-dvh">
      <TopBar />
      <div className="bg-linear-to-b from-[#1E3E85] to-[#336DA6] text-white h-dvh w-full pt-44 flex flex-col items-center">
        <div className="w-[54%]  flex flex-col gap-8 justify-center items-center">
          <p className="text-6xl font-bold">RemoteRecruit’s Difference</p>
          <p className="font-medium text-2xl">
            RemoteRecruit is connecting the world with an easy-to-use platform
            that lets full-time, part-time, and freelance workers showcase their
            talents to businesses that need them. With no paywalls, no fees, and
            no barriers, there’s nothing but you, your talents, and the next
            step in your career.
          </p>
        </div>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div
      className="flex flex-row justify-between
      px-17 py-10 bg-[#1E3E85] text-white
    "
    >
      <img src={remote_recruit} className="h-15" />

      <div className="flex flex-row gap-10 ">
        <NavButton href={"/signin"} name={"Sign In"} isPrimary={false} />
        <NavButton href={"/signup"} name={"Sign Up"} />
      </div>
    </div>
  );
}
