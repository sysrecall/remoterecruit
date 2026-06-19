import AreYouReady from "../sections/home/AreYouReady";
import CommonQA from "../sections/home/CommonQA";
import CustomProfile from "../sections/home/CustomProfile";
import FeeFree from "../sections/home/FeeFree";
import Footer from "../sections/home/Footer";
import GlobalReach from "../sections/home/GlobalReach";
import Hero from "../sections/home/Hero";
import OneClickAway from "../sections/home/OneClickAway";

export default function Home() {
  return (
    <>
      <Hero />
      <GlobalReach />
      <FeeFree />
      <CustomProfile />
      <AreYouReady />
      <CommonQA />
      <OneClickAway />
      <Footer />
    </>
  );
}
