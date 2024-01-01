import { About, Navbar, Footer, Team } from "../components";

const TeamPage = () => {
  return (
    <div className="relative z-0">
      <div className="mb-8">
        <Navbar />
      </div>
      <div className="min-h-screen flex flex-col">
        <Team />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default TeamPage;
