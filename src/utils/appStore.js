import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesDataSlice from "./movieSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        moviesData: moviesDataSlice
    }
})

export default appStore;