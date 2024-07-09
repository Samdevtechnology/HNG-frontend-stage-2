import Container from "../components/Container";
import FeaturedSection from "./components/Featured";
import HeroSection from "./components/Hero";
import TopSellerSection from "./components/TopSellers";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TopSellerSection />
      <FeaturedSection />
    </div>
  );
};

export default Home;
