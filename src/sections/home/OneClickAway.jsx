import tick from "../../assets/tick.png";
import cross from "../../assets/cross.png";
import GradientCircle from "../../components/ui/GradientCircle";
import img_person from "../../assets/img_person.png";

export default function OneClickAway() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[72%] py-34 text-start flex flex-col gap-15">
        <div>
          <h1 className="text-2xl text-center">Help Is Once Click Away</h1>
        </div>
        <div className="flex flex-row justify-between">
          <div
            className="w-145 h-98 rounded-4xl
      shadow-[-14px_50px_150px_0px_rgba(49,89,211,0.12)]
      p-8
      flex flex-col justify-between    
    "
          >
            <div className="flex flex-row">
              <div className="bg-[#ECF2FF] w-45 h-50 rounded-2xl  flex flex-col justify-center items-center">
                <p className="font-bold text-4xl text-[#52B4DA]">Free</p>
                <p className="font-medium text-2xl text-gray-500">Basic</p>
              </div>

              <div className="flex-1 pl-10">
                <div className="flex flex-col gap-6 pt-2 font-medium text-[1.1em]">
                  <div className="flex flex-row ">
                    <GradientCircle
                      imageSrc={tick}
                      className="w-6 h-6 p-0.75"
                    />
                    <p className="pl-4">1 Active Job</p>
                  </div>
                  <div className="flex flex-row">
                    <GradientCircle
                      imageSrc={tick}
                      className="w-6 h-6 p-0.75"
                    />
                    <p className="pl-4">Basic List Placement</p>
                  </div>
                  <div className="flex flex-row">
                    <GradientCircle
                      colors={["#A2A3B8", "#808191"]}
                      imageSrc={cross}
                      className="w-6 h-6 p-0.75"
                    />
                    <p className="pl-4 text-gray-700">
                      Unlimited Job Applicants
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <GradientCircle
                      colors={["#A2A3B8", "#808191"]}
                      imageSrc={cross}
                      className="w-6 h-6 p-0.75"
                    />
                    <p className="pl-4 text-gray-700">
                      Invite Anyone to Apply to Your Jobs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundImage:
                  "linear-gradient(129.98deg, #52B4DA -106.35%, #1E3E85 95.25%)",
              }}
              className="rounded-[30px] p-0.75 transition-all duration-300 hover:p-0.5 hover:shadow-[0_4px_20px_rgba(30,62,133,0.35)]"
            >
              <a
                href="/purchase/free"
                className="
      bg-white
      hover:bg-[#ECF2FF]
      rounded-[26px]
      font-bold
      px-8 py-10
      h-11
      text-center
      flex items-center justify-center
      transition-colors duration-300
    "
              >
                Get Started
              </a>
            </div>
          </div>

          <div
            className="w-145 h-98 rounded-4xl
      shadow-[-14px_50px_150px_0px_rgba(49,89,211,0.12)]
      p-8
      flex flex-col justify-between    
    "
          >
            <div className="flex flex-row">
              <div
                className="relative bg-[#ECF2FF] w-45 h-50 
              rounded-2xl flex flex-col justify-center items-center"
              >
                <div
                  className={`
                    absolute
                    -top-6
                    w-40 h-13
                    rounded-full
                    bg-[#C2EEFF]
                    flex items-center
                    px-3 gap-2
                    shadow-[0px_4px_4px_0px_rgba(67,145,193,0.21)]
                  `}
                >
                  <div className="flex justify-center items-center rounded-full w-11 h-11 bg-white">
                    <img className="p-3" src={img_person} />
                  </div>

                  <div className="flex flex-col font-bold">Premium</div>
                </div>

                <p
                  className="text-4xl font-bold bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(132.56deg, #52B4DA 5.63%, #1E3E85 106.18%)",
                  }}
                >
                  $79.99
                </p>
                <p className="font-medium text-2xl text-gray-500">Per Month</p>
              </div>

              <div className="flex-1 pl-10">
                <div className="flex flex-col gap-6 pt-2">
                  <div className="flex flex-row ">
                    <GradientCircle
                      imageSrc={tick}
                      className="w-6 h-6 p-0.75"
                    />
                    <p className="pl-4">1 Active Job</p>
                  </div>
                  <div className="flex flex-row">
                    <GradientCircle
                      imageSrc={tick}
                      className="w-6 h-6 p-0.75"
                    />
                    <p className="pl-4">Basic List Placement</p>
                  </div>
                  <div className="flex flex-row">
                    <GradientCircle
                      imageSrc={tick}
                      className="w-6 h-6 p-0.75"
                    />
                    <p className="pl-4">Unlimited Job Applicants</p>
                  </div>
                  <div className="flex flex-row">
                    <GradientCircle
                      imageSrc={tick}
                      className="w-6 h-6 p-0.75"
                    />
                    <p className="pl-4">Invite Anyone to Apply to Your Jobs</p>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="/purchase/paid"
              style={{
                backgroundImage:
                  "linear-gradient(129.98deg, #52B4DA -106.35%, #1E3E85 95.25%)",
                color: "white",
              }}
              className="
    w-full
    rounded-[30px]
    font-bold
    px-8 py-10
    h-11
    text-center
    flex items-center justify-center
    transition-all duration-300
    shadow-[0px_10px_30px_0px_rgba(49,89,211,0.25)]
    hover:shadow-[0px_12px_35px_0px_rgba(49,89,211,0.35)]
    hover:brightness-110
  "
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
