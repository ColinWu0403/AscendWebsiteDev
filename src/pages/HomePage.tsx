import { About, Navbar, Footer, Upcoming, Hero } from "../components";

const HomePage = () => {
  return (
    <div className="relative z-0">
      <div className="mb-8">
        <Navbar />
      </div>
      {/* Body */}
      <div className="min-h-screen flex flex-col">
        <div className="">
          <Hero
            backgroundImage="https://i.postimg.cc/zBCf99N6/Purdue-Wallpaper.png"
            largeText="Ascend Purdue"
          />
        </div>
        <About />
        <Upcoming />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
