import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesDataSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        moviesData: moviesDataSlice,
        gpt: gptSlice,
        config: configSlice
    }
})

export default appStore;