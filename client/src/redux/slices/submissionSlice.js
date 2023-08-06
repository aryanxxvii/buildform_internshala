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

      switch (action.payload.questionType) {
        case "mcq":
          console.log()
          const sameMCQ = state.findIndex(
            (item) => item._id === action.payload._id
          )
          if (sameMCQ > -1) {
            state[sameMCQ] = action.payload
          } else {
            state.push(action.payload)
          }

          break
        case "cloze":
          const sameClo = state.findIndex(
            (item) => item._id === action.payload._id
          )
          if (sameClo > -1) {
            state[sameClo] = action.payload
          } else {
            state.push(action.payload)
          }
          break
        case "categorize":
          console.log("cat")
          const sameCatIndex = state.findIndex(
            (item) => item._id === action.payload._id
          )

          if (sameCatIndex > -1) {
            console.log("found dame cat")
            // Question with the same ID already exists in the state
            // Replace the answer at the specified index with the new answer
            const updatedState = state.map((item, index) => {
              if (index === sameCatIndex) {
                // Update the answer at the specified index
                const updatedAnswers = [...item.answers] // Create a copy of the answers array
                updatedAnswers[action.payload.index] = action.payload.answers[0]
                return {
                  ...item,
                  answers: updatedAnswers,
                }
              }

              return item // For other questions, return the item as it is
            })

            return updatedState
          } else {
            console.log("not found")
            // Question with the same ID does not exist in the state
            // Push a new element to the state
            return [
              ...state,
              {
                questionText: action.payload.questionText,
                _id: action.payload._id,
                questionType: action.payload.questionType,
                answers: action.payload.answers,
              },
            ]
          }

        //   const sameCat = state.findIndex(
        //     (item) =>
        //       item._id === action.payload._id &&
        //       item.index === action.payload.index
        //   )
        //   if (sameCat > -1) {
        //     state[sameCat] = action.payload
        //   } else {
        //     state.push(action.payload)
        //   }
        //   break
        // default:
        //   break
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
