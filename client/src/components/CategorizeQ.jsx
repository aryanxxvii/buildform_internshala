import React from "react"
import Dropdown from "./Dropdown"
import { addAnswer } from "../redux/slices/submissionSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
const CategorizeQ = ({ question }) => {
  return (
    <div className="w-full md:w-1/2 bg-purple-100 rounded-md p-2 text-purple-800 mb-3 gap-2 flex flex-col">
      <img src={question.image} className="rounded-md w-full aspect-[10/4]" />
      <h1>{question.questionText}</h1>
      <div className="flex flex-col gap-2 mt-2">
        {question.answers[0].map((answers, index) => (
          <div className="flex w-96 gap-6 align-middle items-center">
            <div className="w-1/3 py-2 px-4 text-purple-800 rounded-md flex bg-purple-50 items-center justify-center">
              <p className="text-center font-bold">{answers}</p>
            </div>

            <Dropdown
              answers={question.answers[1]}
              qid={question._id}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategorizeQ
