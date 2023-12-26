import { About, Navbar, Footer, MyCarousel } from "../components";

const HomePage = () => {
  return (
    <div className="absolute z-0">
      <div>
        <div className="mb-8">
          <Navbar />
        </div>
        <About />
        <MyCarousel />
      </div>
      <div className="relative z-0">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
