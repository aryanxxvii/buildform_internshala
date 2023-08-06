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

  const handleSave = () => {
    const newQuestion = {
      questionType: "comprehension",
      questionText: questionText,
      nanoID: nanoID,
    }
    dispatch(addQuestion(newQuestion))
    // map over it
    console.log("AAAAAAAAA", mcqQuestions)
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
    <div>
      <input
        type="text"
        placeholder="Question Text"
        value={questionText}
        onChange={(event) => setQuestionText(event.target.value)}
      />

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

      <button onClick={handleAddQuestion}>Add MCQ Question</button>
      <button onClick={handleSave}>Save</button>
    </div>
  )
}

export default CreateComprehension
