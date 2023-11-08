import React from "react";
import Navbar from "../components/Navbar";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Welcome to Ascend Website</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod nisi, vel facilisis velit. Sed euismod euismod nisi, vel
          facilisis velit.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
