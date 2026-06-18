export default function CommonQA() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[72%] py-34 text-start flex flex-col gap-15">
        <h1 className="text-2xl">Common Questions</h1>

        <div className="flex flex-col gap-12 text-2xl">
          <div className="flex flex-col gap-4 leading-8 ">
            <p className="font-medium ">
              Do I have to sign a long-term contract?{" "}
            </p>
            <p className="text-gray-800 text-[0.9em]">
              Actually beard single-origin coffee, twee 90's PBR Echo Park
              sartorial try-hard freegan Portland ennui. Selvage jean shorts
              90's, Vice American Apparel try-hard food truck Shoreditch fap
              lomo Wes Anderson. Art party
            </p>
          </div>
          <div className="flex flex-col gap-4 leading-8 ">
            <p className="font-medium ">Can I pay for a whole year?</p>
            <p className="text-gray-800 text-[0.9em]">
              Actually beard single-origin coffee, twee 90's PBR Echo Park
              sartorial try-hard freegan Portland ennui. Selvage
            </p>
          </div>
          <div className="flex flex-col gap-4 leading-8 ">
            <p className="font-medium ">What if I need help? </p>
            <p className="text-gray-800 text-[0.9em]">
              Actually beard single-origin coffee, twee 90's PBR Echo Park
              sartorial try-hard freegan Portland ennui. Selvage jean shorts
              90's, Vice American Apparel try-hard food truck Shoreditch fap
              lomo Wes Anderson. Art party{" "}
            </p>
          </div>
        </div>

        <a
          href="/questions"
          className="
            w-fit
            rounded-[20px]
            font-bold
            px-8 py-10
            h-13
            text-center
            flex items-center justify-center
            transition-all
            duration-200
            outline-4
            outline-[#53B4DAB1]
            hover:bg-[#53B4DAB1]
            hover:text-white
          "
        >
          More Questions
        </a>
      </div>
    </div>
  );
}
