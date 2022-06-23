import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const urlAPI = "https://api.spacexdata.com/v3/missions";

// async Action
export const displayMission = createAsyncThunk(
  "missions/loadMission",
  async () => {
    const response = await fetch(urlAPI);
    const missions = await response.json();
    const missionArray = missions.map((key) => ({
      id: key.mission_id,
      name: key.mission_name,
      description: key.description,
    }));
    return missionArray;
  }
);

const options = {
  name: "missions",
  initialState: [],
  reducers: {},
  extraReducers: {
    [displayMission.fulfilled]: (state, action) => action.payload,
  },
};
const missionSlice = createSlice(options);
export default missionSlice.reducer;
