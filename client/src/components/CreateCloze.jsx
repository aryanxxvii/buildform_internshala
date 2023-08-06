import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addQuestion } from "../redux/slices/creationSlice"

const CreateCloze = () => {
  const dispatch = useDispatch()
  const [questionText, setQuestionText] = useState("")
  const [options, setOptions] = useState("")

  const handleQuestionTextChange = (e) => {
    setQuestionText(e.target.value)
  }

  const handleOptionsChange = (e) => {
    setOptions(e.target.value)
  }

  const handleAddQuestion = () => {
    // Parse the options string into an array by splitting it using commas.
    const parsedOptions = options.split(",").map((option) => option.trim())

    // Create a new question object based on the question type and the entered data.
    const newQuestion = {
      questionType: "cloze", // Replace with the actual question type.
      questionText: questionText,
      answers: parsedOptions,
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
        value={options}
        onChange={handleOptionsChange}
      />
      <button onClick={handleAddQuestion}>ADD IT</button>
    </div>
  )
}

export default CreateCloze
