import lets_find_work_large from "../../assets/lets_find_work_large.png";
import arrow from "../../assets/arrow.png";
import GradientCircle from "../../components/ui/GradientCircle";

export default function AreYouReady() {
  return (
    <div className="relative h-180 overflow-hidden">
      <div
        className="absolute inset-0 flex flex-row"
        style={{
          background:
            "linear-gradient(132.56deg, rgba(87, 153, 235, 0.1) 5.63%, rgba(159, 116, 251, 0.1) 106.18%)",
        }}
      >
        <GradientCircle
          colors={["#FFED43", "#F29939"]}
          className="w-18 h-18
            left-80
            z-10
            absolute              
            p-1
            top-10
          "
        />

        <div className="relative h-[80%] top-36 w-[50%] bg-white rounded-tr-4xl">
          <img
            className="object-fit object-top pr-4 pt-4 rounded-tr-4xl antialiased"
            src={lets_find_work_large}
            alt="lets find work large"
          />
        </div>

        <div className="w-[50%] flex justify-center items-center text-left">
          <div className="w-[70%] gap-8 flex flex-col justify-center items-start ">
            <p className="font-bold text-xl">Are you ready?</p>

            <p className="font-medium text-6xl">
              Help is only a few clicks away!
            </p>

            <p className="font-medium text-2xl text-gray-400 w-100">
              Click Below to get set up super quickly and find help now!
            </p>

            <a
              href="/purchase/paid"
              className={`
        w-50 h-18
        rounded-full
        bg-[rgba(82,180,218,0.16)]
        
        hover:shadow-[14px_10px_30px_0px_rgba(49,89,211,0.12)]

        flex items-center
        px-3 gap-2

      `}
            >
              <div className="rounded-full w-14 h-14 bg-[#52B4DA]">
                <img className="p-3" src={arrow} />
              </div>

              <div className="flex flex-col leading-tight">Get Started</div>
            </a>
          </div>
        </div>

        <GradientCircle
          colors={["#52B4DA", "#1E3E85"]}
          className="w-8 h-8
            right-80
            z-10
            absolute              
            p-1
            bottom-10
          "
        />
      </div>
    </div>
  );
}
