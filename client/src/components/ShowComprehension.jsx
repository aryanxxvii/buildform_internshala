import React from "react"
import { useSelector } from "react-redux"
import ShowMCQ from "./ShowMCQ"
const ShowComprehension = ({ id, text, options, nanoID }) => {
  const questions = useSelector((state) => state.creation)
  const mcqQuestions = questions?.filter(
    (question) => question.questionType === "mcq"
  )
  const mcqs = mcqQuestions.filter((question) => question.nanoID === nanoID)

  return (
    <div>
      <div>{text}</div>
      {mcqs.map((q) => (
        <ShowMCQ text={q.questionText} options={q.answers} />
      ))}
    </div>
  )
}

export default ShowComprehension
