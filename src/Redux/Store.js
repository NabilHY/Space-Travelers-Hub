import { configureStore } from "@reduxjs/toolkit";

import missionsReducer from "./Missions/MissionsSlice";

const store = configureStore({
  reducer: {
    Missions: missionsReducer,
  },
});
export default store;
