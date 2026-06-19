import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const questions = [
  {
    q: "Do I have to sign a long-term contract?",
    a: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party",
  },
  {
    q: "Can I pay for a whole year?",
    a: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage",
  },
  {
    q: "What if I need help?",
    a: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party",
  },
];

export default function CommonQA() {
  const containerRef = useScrollAnimation({
    threshold: 0.1,
    staggerDelay: 120,
  });

  return (
    <div ref={containerRef} className="flex justify-center items-center">
      <div className="w-[88%] sm:w-[80%] lg:w-[72%] py-16 sm:py-24 lg:py-34 text-start flex flex-col gap-10 sm:gap-12 lg:gap-15">
        <h1 className="text-xl sm:text-2xl">Common Questions</h1>

        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 text-lg sm:text-xl lg:text-2xl">
          {questions.map(({ q, a }) => (
            <div
              key={q}
              className="animate-item opacity-0 flex flex-col gap-3 sm:gap-4 leading-7 sm:leading-8"
            >
              <p className="font-medium">{q}</p>
              <p className="text-gray-800 text-[0.85em] sm:text-[0.9em]">{a}</p>
            </div>
          ))}
        </div>

        <a
          href="/questions"
          className="
            animate-item opacity-0
            w-fit
            rounded-[20px]
            font-bold
            px-6 sm:px-8
            py-3
            h-11 sm:h-13
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
