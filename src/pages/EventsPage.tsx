import React from "react";

import { About, Navbar, Footer } from "../components";

const EventsPage = () => {
  return (
    <div className="relative z-0">
      <div>
        <div className="">
          <Navbar />
        </div>
        Events Page
      </div>
      <div className="relative z-0">
        <Footer />
      </div>
    </div>
  );
};

export default EventsPage;
