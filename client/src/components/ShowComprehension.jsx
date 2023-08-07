import React from "react"
import { useSelector } from "react-redux"
import ShowMCQ from "./ShowMCQ"
const ShowComprehension = ({ id, text, options, nanoID, image }) => {
  const questions = useSelector((state) => state.creation)
  const mcqQuestions = questions?.filter(
    (question) => question.questionType === "mcq"
  )
  const mcqs = mcqQuestions.filter((question) => question.nanoID === nanoID)

  return (
    <div className="bg-green-100/70 w-1/2 rounded-md p-4 flex flex-col gap-4">
      <img src={image} className="w-48 rounded-md" />
      <div className="bg-green-200/80 text-green-900 text-bold rounded-md italic p-2">
        {text}
      </div>
      {mcqs.map((q) => (
        <ShowMCQ text={q.questionText} options={q.answers} />
      ))}
    </div>
  )
}

export default ShowComprehension
