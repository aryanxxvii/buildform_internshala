import React from "react"
import { useDispatch, useSelector } from "react-redux"
import ShowMCQ from "./ShowMCQ"
import { deleteQuestion } from "../redux/slices/creationSlice"
const ShowComprehension = ({ id, text, options, nanoID, image }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(deleteQuestion({ _id: id }))
  }
  const questions = useSelector((state) => state.creation)
  const mcqQuestions = questions?.filter(
    (question) => question.questionType === "mcq"
  )
  const mcqs = mcqQuestions.filter((question) => question.nanoID === nanoID)

  return (
    <div className="bg-green-100/70 lg:w-1/2 rounded-md p-4 flex flex-col gap-4">
      <img src={image} className="w-48 rounded-md" />
      <div className="flex justify-between gap-4">
        <div className="bg-green-200/80 text-green-900 text-bold rounded-md italic p-2">
          {text}
        </div>
        <button
          className="bg-white rounded-md h-fit px-4 py-2"
          onClick={handleClick}
        >
          Remove
        </button>
      </div>

      {mcqs.map((q) => (
        <ShowMCQ text={q.questionText} options={q.answers} id={q._id} />
      ))}
    </div>
  )
}

export default ShowComprehension
