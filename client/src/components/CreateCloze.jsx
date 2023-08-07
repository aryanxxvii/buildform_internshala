import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addQuestion } from "../redux/slices/creationSlice"

const CreateCloze = () => {
  const dispatch = useDispatch()
  const [questionText, setQuestionText] = useState("")
  const [image, setImage] = useState("")
  const [options, setOptions] = useState("")

  const handleQuestionTextChange = (e) => {
    setQuestionText(e.target.value)
  }

  const handleOptionsChange = (e) => {
    setOptions(e.target.value)
  }
  const handleImageChange = (e) => {
    setImage(e.target.value)
  }

  const handleAddQuestion = () => {
    // Parse the options string into an array by splitting it using commas.
    const parsedOptions = options.split(",").map((option) => option.trim())

    // Create a new question object based on the question type and the entered data.
    const newQuestion = {
      questionType: "cloze", // Replace with the actual question type.
      questionText: questionText,
      answers: parsedOptions,
      image: image,
    }

    // Dispatch the addQuestion action with the new question object as the payload.
    dispatch(addQuestion(newQuestion))
  }

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Image Link"
        value={image}
        className="bg-gray-200 rounded-md border-none"
        onChange={handleImageChange}
      ></input>
      <input
        type="text"
        placeholder="Question with 4 underscores"
        value={questionText}
        className="bg-gray-200 rounded-md border-none"
        onChange={handleQuestionTextChange}
      />
      <input
        type="text"
        placeholder="Comma Sep. Options"
        value={options}
        className="bg-gray-200 rounded-md border-none"
        onChange={handleOptionsChange}
      />
      <div className="text-center">
        <button
          onClick={handleAddQuestion}
          className="bg-purple-200 text-purple-800 rounded-md px-4 py-2 w-fit"
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default CreateCloze
