import { createSlice } from "@reduxjs/toolkit"

// [
//     [
//         type, questionId, [category1, category2] (in order)
//     ],
//     [
//         type, questionId, [mcq_choice]
//     ],
//     [
//         type, questionId, [cloze1, cloze2] (in order)
//     ],
// ]

const submissionSlice = createSlice({
  name: "Submissions",
  initialState: [],
  reducers: {
    addAnswer: (state, action) => {
      // ANSWERS as LIST
      // CATEGORIZE: [TYPE = "categorize", OPTION = "Country", QID = "2", INDEX = 1/0]
      // MCQ: [TYPE = "mcq", OPTION = Number , QID = "2", "PARENTID" = "3"]
      // CLOZE: [TYPE = "cloze", ANSWERS = ["are", "the"], QID = "2", INDEX = 1/0]

      switch (action.payload.type) {
        case "mcq":
          console.log("case")
          const sameMCQ = state.findIndex(
            (item) => item.qid === action.payload.qid
          )
          if (sameMCQ > -1) {
            state[sameMCQ] = action.payload
          } else {
            state.push(action.payload)
          }

          break
        case "cloze":
          const sameClo = state.findIndex(
            (item) => item.qid === action.payload.qid
          )
          if (sameClo > -1) {
            state[sameClo] = action.payload
          } else {
            state.push(action.payload)
          }
          break
        case "categorize":
          const sameCat = state.findIndex(
            (item) =>
              item.qid === action.payload.qid &&
              item.index === action.payload.index
          )
          if (sameCat > -1) {
            state[sameCat] = action.payload
          } else {
            state.push(action.payload)
          }
          break
        default:
          break
      }
    },
    editAnswer: (state, action) => {
      const { questionId, answers } = action.payload
      const updatedState = state.map((data) => {
        if (data[0] === questionId) {
          return [data[0], answers]
        }
        return data
      })
      state = updatedState
    },
  },
})

export const { addAnswer, editAnswer } = submissionSlice.actions

export default submissionSlice.reducer
