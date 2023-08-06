import { createSlice } from "@reduxjs/toolkit"

// id
// parent?
// type
// text
// options

// Cloze: ["1", "cloze", "This ____ a ____ question",  ["is", "cloze"]]
// MCQ: ["2", "5", "mcq", "What is fear?", ["Mind Killer","Eminem", "No Idea", "Get Idea"]]
// Categorize: ["3", "categorize", "Choose between State and Country", [["Italy", "Delhi"], ["Country", "State"]]]
// Comprehension: ["5", "comprehension", "Fear is the mind killer."]

const submissionSlice = createSlice({
  name: "Submissions",
  initialState: [],
  reducers: {
    addQuestion: (state, action) => {
      if (action.payload._id) {
        const questionExists = state.some(
          (question) => question._id === action.payload._id
        )

        if (!questionExists) {
          return [...state, action.payload]
        } else {
          console.log(questionExists)
        }
      } else {
        return [...state, action.payload]
      }
    },
    deleteQuestions: (state, action) => {
      state = []
    },
    editQuestion: (state, action) => {},
  },
})

export const { addQuestion, editQuestion, deleteQuestions } =
  submissionSlice.actions

export default submissionSlice.reducer
