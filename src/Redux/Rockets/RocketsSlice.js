import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const displayRockets = createAsyncThunk(
    "rockets/loadRockets",

    async () => {
        const url = "https://api.spacexdata.com/v3/rockets"
        const response = await fetch(url);
        const rockets = await response.json();
        console.log(rockets)
        const rocketsArray = rockets.map((key) => ({
            id: key.id,
            name: key.rocket_name,
            description: key.description,
            img: key.flickr_images
        }));
        return rocketsArray;
    }
);

const options = {
    name: "rockets",
    initialState: [],
    reducers: {},
    extraReducers: {
        [displayRockets.fulfilled]: (state, action) => action.payload,
    },
};
const RocketsSlice = createSlice(options);
export default RocketsSlice.reducer;
