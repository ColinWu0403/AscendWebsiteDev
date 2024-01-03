import React from "react";

import { Navbar, Footer, Events } from "../components";

const EventsPage = () => {
  return (
    <div className="relative z-0">
      <div className="mb-8">
        <Navbar />
      </div>
      <div className="min-h-screen flex flex-col">
        <Events />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default EventsPage;
