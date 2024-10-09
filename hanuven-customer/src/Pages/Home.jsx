import Slider from "../Components/Slider";
import AboutProducts from "../Components/AboutProducts";
import LatestNews from "../Components/LatestNews";
import OurTeam from "../Components/OurTeam";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <AboutProducts />
      <LatestNews />
      <OurTeam />
      <Footer />
    </>
  );
}
