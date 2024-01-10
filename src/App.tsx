import { HashRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  EventsPage,
  TeamPage,
  PointsPage,
  JoinPage,
  ErrorPage,
} from "./pages";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/about" element={<HomePage />}></Route>
        <Route path="/events" element={<EventsPage />}></Route>
        <Route path="/points" element={<PointsPage />}></Route>
        <Route path="/team" element={<TeamPage />}></Route>
        <Route path="/join" element={<JoinPage />}></Route>

        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
