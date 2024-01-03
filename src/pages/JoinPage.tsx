import { Navbar, Footer, Join } from "../components";

const JoinPage = () => {
  return (
    <div className="relative z-0">
      <div className="mb-8">
        <Navbar />
      </div>
      {/* Body Page */}
      <div className="min-h-screen flex flex-col">
        <Join />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default JoinPage;
