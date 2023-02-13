import { configureStore } from "@reduxjs/toolkit";
import text from './textSlice'

const store = configureStore({

    reducer: {
        text
    }
})

export default store