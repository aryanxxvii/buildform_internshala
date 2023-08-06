import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addQuestion } from "../redux/slices/creationSlice"
// ["3", "categorize", "Choose between State and Country", [["Italy", "Delhi"], ["Country", "State"]]]

const CreateCategorize = () => {
  const dispatch = useDispatch()
  const [questionText, setQuestionText] = useState("")
  const [options1, setOptions1] = useState("")
  const [options2, setOptions2] = useState("")

  const handleQuestionTextChange = (e) => {
    setQuestionText(e.target.value)
  }

  const handleOptionsChange1 = (e) => {
    setOptions1(e.target.value)
  }
  const handleOptionsChange2 = (e) => {
    setOptions2(e.target.value)
  }

  const handleAddQuestion = () => {
    // Parse the options string into an array by splitting it using commas.
    const parsedOptions1 = options1.split(",").map((option) => option.trim())
    const parsedOptions2 = options2.split(",").map((option) => option.trim())

    // Create a new question object based on the question type and the entered data.
    const newQuestion = {
      questionType: "categorize", // Replace with the actual question type.
      questionText: questionText,
      answers: [parsedOptions1, parsedOptions2],
    }

    // Dispatch the addQuestion action with the new question object as the payload.
    dispatch(addQuestion(newQuestion))
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Question Text"
        value={questionText}
        onChange={handleQuestionTextChange}
      />
      <input
        type="text"
        placeholder="Comma Sep. Options"
        value={options1}
        onChange={handleOptionsChange1}
      />
      <input
        type="text"
        placeholder="Comma Sep. Options"
        value={options2}
        onChange={handleOptionsChange2}
      />
      <button onClick={handleAddQuestion}>ADD IT</button>
    </div>
  )
}

export default CreateCategorize
