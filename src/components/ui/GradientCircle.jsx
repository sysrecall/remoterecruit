export default function GradientCircle({
  colors = ["#52B4DA", "#1E3E85"],
  className = "",
  imageSrc,
  alt = "",
}) {
  return (
    <div
      className={`rounded-full flex items-center justify-center ${className}`}
      style={{
        background: `linear-gradient(132.56deg, ${colors[0]} 5.63%, ${colors[1]} 106.18%)`,
      }}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className="w-[86%] h-[86%] rounded-full object-cover"
        />
      )}
    </div>
  );
}
