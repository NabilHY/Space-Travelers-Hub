import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { displayMission } from "./Redux/Missions/MissionsSlice";
import { displayRockets } from "./Redux/Rockets/RocketsSlice"
import Navbar from "./components/Navbar";
import Rockets from "./components/pages/Rockets";
import Missions from "./components/pages/Missions";
import Profile from "./components/pages/Profile";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayMission());
    dispatch(displayRockets())
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
