import Slider from "../Components/Slider";
import AboutProducts from "../Components/AboutProducts";
import LatestNews from "../Components/LatestNews";
import OurTeam from "../Components/OurTeam";
import Header from "../Components/Header";
export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <AboutProducts />
      <LatestNews />
      <OurTeam />
    </>
  );
}
