export default function NavButton({ name, href, isPrimary = true }) {
  return (
    <a
      href={href}
      className={`
        rounded-[20px]
        px-5
        py-3.5
        h-13
        text-center
        flex items-center justify-center
        font-medium
        transition-all
        duration-200

        ${
          isPrimary
            ? "bg-[#4DA8CCE5] hover:shadow-[0_0_12px_3px_rgba(77,168,204,0.6)]"
            : "hover:outline-2 hover:outline-[#4DA8CC]"
        }
      `}
    >
      {name}
    </a>
  );
}
