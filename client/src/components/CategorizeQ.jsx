import React from "react"
import Dropdown from "./Dropdown"
import { addAnswer } from "../redux/slices/submissionSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
const CategorizeQ = ({ question }) => {
  return (
    <div>
      <h1>{question.text}</h1>
      <div className="flex flex-col gap-2 w-1/2">
        {question.answers[0].map((answers, index) => (
          <div className="flex">
            <p className="w-1/2">{answers}</p>
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
