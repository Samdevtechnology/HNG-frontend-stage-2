import Container from "../components/Container";
import FeaturedSection from "./components/Featured";
import HeroSection from "./components/Hero";
import TopSellerSection from "./components/TopSellers";

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <TopSellerSection />
      <FeaturedSection />
    </Container>
  );
};

export default Home;
