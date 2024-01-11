import { Navbar, Footer, Points } from "../components";

const PointsPage = () => {
  return (
    <div className="relative z-0">
      <div className="mb-8">
        <Navbar />
      </div>
      <div className="min-h-screen flex flex-col">
        <Points />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default PointsPage;
