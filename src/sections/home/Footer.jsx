import remote_recruit from "../../assets/remote_recruit.png";
import fb from "../../assets/fb.png";
import x from "../../assets/x.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import snap from "../../assets/snap.png";
import rr_1 from "../../assets/rr_1.png";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const socials = [
  { href: "https://facebook.com/remoterecruit", src: fb, alt: "Facebook" },
  { href: "https://x.com/remoterecruit", src: x, alt: "X (Twitter)" },
  { href: "https://instagram.com/remoterecruit", src: insta, alt: "Instagram" },
  { href: "https://twitter.com/remoterecruit", src: twitter, alt: "Twitter" },
  {
    href: "https://linkedin.com/company/remoterecruit",
    src: linkedin,
    alt: "LinkedIn",
  },
  {
    href: "https://snapchat.com/add/remoterecruit",
    src: snap,
    alt: "Snapchat",
  },
];

export default function Footer() {
  const containerRef = useScrollAnimation({
    threshold: 0.05,
    staggerDelay: 80,
  });

  return (
    <div
      ref={containerRef}
      style={{
        background: `linear-gradient(132.56deg, #336DA6 5.63%, #1E3E85 106.18%)`,
      }}
      className="flex flex-col justify-center items-center"
    >
      <div className="w-[88%] sm:w-[80%] lg:w-[72%] py-12 sm:h-60 flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-4">
        <img
          className="w-40 sm:w-52 lg:w-60"
          src={remote_recruit}
          alt="Remote Recruit Logo"
        />

        <div className="flex flex-row flex-wrap justify-center gap-3 sm:gap-4">
          {socials.map(({ href, src, alt }) => (
            <a key={alt} href={href} target="_blank" rel="noreferrer">
              <img
                width={36}
                className="sm:w-10 hover:opacity-80 transition-opacity duration-200"
                src={src}
                alt={alt}
              />
            </a>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center w-full h-16 sm:h-24 border-t border-[#8BA3CC]">
        <img
          width={40}
          className="sm:w-13"
          src={rr_1}
          alt="Remote Recruit Logo"
        />
      </div>
    </div>
  );
}
