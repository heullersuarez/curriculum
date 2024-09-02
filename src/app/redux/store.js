import { configureStore } from "@reduxjs/toolkit";

import languageSlice from "./slices/languageSlice";

const store = configureStore({
    reducer: {
        languageSlice
    }
})

export default store;