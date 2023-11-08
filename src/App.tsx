import { BrowserRouter } from "react-router-dom";

import "./App.css";

import { About, Navbar, Carousel } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <Navbar />
        <About />
        {/* <Carousel /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
