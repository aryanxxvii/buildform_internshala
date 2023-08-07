import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addQuestion } from "../redux/slices/creationSlice"
import { nanoid } from "nanoid"
import CreateMCQ from "./CreateMCQ"
const CreateComprehension = () => {
  const dispatch = useDispatch()
  const nanoID = nanoid()
  const [mcqComponents, setMCQComponents] = useState([])
  const [questionText, setQuestionText] = useState("")
  const [mcqQuestions, setMCQQuestions] = useState([])
  const [image, setImage] = useState("")

  const handleSave = () => {
    const newQuestion = {
      questionType: "comprehension",
      questionText: questionText,
      nanoID: nanoID,
      image: image,
    }
    dispatch(addQuestion(newQuestion))
    // map over it
    mcqQuestions.forEach((mcqData) => {
      const newMCQQuestion = {
        questionType: "mcq",
        nanoID: nanoID,
        questionText: mcqData.questionText,
        answers: mcqData.options,
      }
      dispatch(addQuestion(newMCQQuestion))
    })
  }
  const handleAddQuestion = () => {
    setMCQQuestions((prevQuestions) => [
      ...prevQuestions,
      { questionText: "", options: ["", "", "", ""], nanoID: "" },
    ])
  }

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Image Link"
        value={image}
        className="bg-gray-200 rounded-md border-none"
        onChange={(event) => setImage(event.target.value)}
      />
      <input
        type="text"
        placeholder="Question Text"
        value={questionText}
        className="bg-gray-200 rounded-md border-none"
        onChange={(event) => setQuestionText(event.target.value)}
      />
      <div className="">
        {mcqQuestions.map((mcqData, index) => (
          <CreateMCQ
            key={index}
            nanoID={nanoID}
            onSaveMCQ={(data) => {
              setMCQQuestions((prevQuestions) => {
                const updatedQuestions = [...prevQuestions]
                updatedQuestions[index] = data
                return updatedQuestions
              })
            }}
          />
        ))}
      </div>

      <div className="text-center items-center flex flex-col gap-2">
        <button
          onClick={handleAddQuestion}
          className="bg-green-200 text-green-800 rounded-md px-4 py-2 w-fit"
        >
          Add an MCQ
        </button>
        <button
          className="bg-purple-200 text-purple-800 rounded-md px-4 py-2 w-fit"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default CreateComprehension
