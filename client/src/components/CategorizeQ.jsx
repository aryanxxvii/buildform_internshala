import React from "react"
import Dropdown from "./Dropdown"
import { addAnswer } from "../redux/slices/submissionSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
const CategorizeQ = ({ question }) => {
  const dispatch = useDispatch()
  const answers = useSelector((state) => state)
  const handleChange = (e) => {
    // check if question._id is in state
    console.log(e)
    // if in => update the option selected
    // if not => add it
  }

  return (
    <div>
      <h1>{question.text}</h1>
      <div className="flex flex-col gap-2 w-1/2">
        {question.options[0].map((options, index) => (
          <div className="flex">
            <p className="w-1/2">{options}</p>
            <Dropdown
              options={question.options[1]}
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
