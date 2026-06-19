import remote_recruit from "../../assets/remote_recruit.png";
import fb from "../../assets/fb.png";
import x from "../../assets/x.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import snap from "../../assets/snap.png";
import rr_1 from "../../assets/rr_1.png";

export default function Footer() {
  return (
    <div
      style={{
        background: `linear-gradient(132.56deg, #336DA6 5.63%, #1E3E85 106.18%)`,
      }}
      className="flex flex-col justify-center items-center"
    >
      <div className="w-[72%] h-60 flex flex-row items-center justify-between">
        <img width={240} src={remote_recruit} />

        <div className="flex flex-row gap-4">
          <a
            href="https://facebook.com/remoterecruit"
            target="_blank"
            rel="noreferrer"
          >
            <img width={40} src={fb} alt="Facebook" />
          </a>

          <a
            href="https://x.com/remoterecruit"
            target="_blank"
            rel="noreferrer"
          >
            <img width={40} src={x} alt="X (Twitter)" />
          </a>

          <a
            href="https://instagram.com/remoterecruit"
            target="_blank"
            rel="noreferrer"
          >
            <img width={40} src={insta} alt="Instagram" />
          </a>

          <a
            href="https://twitter.com/remoterecruit"
            target="_blank"
            rel="noreferrer"
          >
            <img width={40} src={twitter} alt="Twitter" />
          </a>

          <a
            href="https://linkedin.com/company/remoterecruit"
            target="_blank"
            rel="noreferrer"
          >
            <img width={40} src={linkedin} alt="LinkedIn" />
          </a>

          <a
            href="https://snapchat.com/add/remoterecruit"
            target="_blank"
            rel="noreferrer"
          >
            <img width={40} src={snap} alt="Snapchat" />
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center w-full h-24 border-t border-[#8BA3CC]">
        <img width={52} src={rr_1} />
      </div>
    </div>
  );
}
