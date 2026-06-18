import GradientCircle from "./GradientCircle";

export default function OverlayStrip({
  className = "",
  imageSrc,
  title,
  subTitle,
}) {
  return (
    <div
      className={`
        absolute
        z-20

        w-100 h-20
        rounded-full
        bg-white
        shadow-[14px_10px_30px_0px_rgba(49,89,211,0.12)]

        flex items-center
        px-3 gap-2

        ${className}
      `}
    >
      <GradientCircle
        colors={["#FFED43", "#F29939"]}
        imageSrc={imageSrc}
        className="w-16 h-16"
      />

      <div className="flex flex-col leading-tight">
        <div className="font-medium text-sm">{title}</div>
        <div className="font-bold text-lg">{subTitle}</div>
      </div>
    </div>
  );
}
