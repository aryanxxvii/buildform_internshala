import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addAnswer } from "../redux/slices/submissionSlice"

const MCQ = ({ question }) => {
  const options = question.answers

  const [selectedOption, setSelectedOption] = useState(null)
  const dispatch = useDispatch()

  const handleOptionChange = (option) => {
    setSelectedOption(option)
    dispatch(
      addAnswer({ questionType: "mcq", _id: question._id, answers: [option] })
    )
  }

  const handleSubmit = () => {
    // Dispatch the selected option as an answer when the user clicks on submit.
    dispatch(
      addAnswer({ type: "mcq", qid: question._id, option: selectedOption })
    )
  }

  return (
    <div>
      <h1>{question.questionText}</h1>

      <div className="mt-2">
        {options?.map((option, index) => (
          <div className="flex" key={index}>
            <input
              type="radio"
              className="form-radio text-blue-500"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
            />
            <span className="ml-2">{option}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MCQ
