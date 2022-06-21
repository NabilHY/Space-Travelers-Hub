import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const urlAPI = "https://api.spacexdata.com/v3/missions";

// async Action
export const displayMission = createAsyncThunk(
  "missions/loadMission",
  async () => {
    const response = await fetch(urlAPI);
    const missions = await response.json();
    const missionsArray = [
      Object.keys(missions).map((key) => ({
        id: key,
        ...missions[key][0],
      })),
    ];
    return missionsArray;
  }
);

const options = {
  name: "missions",
  initialState: [],
  reducers: {},
  extraReducers: {
    [displayMission.fulfilled]: (state, action) => action.payload[0],
  },
};
const missionSlice = createSlice(options);
export default missionSlice.reducer;
