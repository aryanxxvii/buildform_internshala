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

      <div className="mt-1 ml-4">
        {options?.map((option, index) => (
          <div className="flex align-middle items-center ml-2" key={index}>
            <input
              type="radio"
              className=" checked:bg-purple-500 focus:ring-purple-300 text-purple-500"
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
