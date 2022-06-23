import { configureStore } from "@reduxjs/toolkit";
import missionsReducer from "./Missions/MissionsSlice";
import RocketsReducer from "./Rockets/RocketsSlice"


const store = configureStore({
  reducer: {
    Missions: missionsReducer,
    Rockets: RocketsReducer,
  },
});
export default store;
