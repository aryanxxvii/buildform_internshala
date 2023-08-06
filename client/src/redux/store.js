import { configureStore } from "@reduxjs/toolkit"
import submissionReducer from "./slices/submissionSlice"
import creationReducer from "./slices/creationSlice"
export const store = configureStore({
  reducer: {
    submission: submissionReducer,
    creation: creationReducer,
  },
})
