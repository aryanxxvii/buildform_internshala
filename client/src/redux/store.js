import { configureStore } from "@reduxjs/toolkit"
import submissionReducer from "./slices/submissionSlice"
export const store = configureStore({
  reducer: {
    submission: submissionReducer,
  },
})
