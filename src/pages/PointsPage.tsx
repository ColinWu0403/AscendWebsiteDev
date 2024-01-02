import { Navbar, Footer } from "../components";

const PointsPage = () => {
  return (
    <div className="relative z-0">
      <div className="mb-8">
        <Navbar />
      </div>
      <div className="min-h-screen flex flex-col">
        {/* <ImageSlider slides={slides} /> */}
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default PointsPage;
