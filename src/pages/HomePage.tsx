import { About, Navbar, Footer, ImageSlider } from "../components";
import { slides } from "../constants/index";

const HomePage = () => {
  return (
    <div className="relative z-0">
      <div className="mb-8">
        <Navbar />
      </div>
      <div className="absolute w-full top-20">
        {/* <div className="w-[1000px] h-[280px]"> */}
        {/* <div className="w-full h-full"> */}
        {/* <ImageSlider slides={slides} /> */}
        {/* </div> */}
        {/* </div> */}
        <About />
      </div>
      <div className="relative z-0">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
