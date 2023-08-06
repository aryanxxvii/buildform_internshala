import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { editAnswer, addAnswer } from "../redux/slices/submissionSlice"
const Dropdown = ({ answers, qid, index }) => {
  const options = answers
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  console.log("OPTIONS", options)
  const handleClick = (option) => {
    selectOption(option)

    dispatch(
      addAnswer({
        questionType: "categorize",
        _id: qid,
        answers: [option],
        index,
      })
    )
  }
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectOption = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
        onClick={toggleDropdown}
      >
        {selectedOption ? selectedOption : "Select an option"}
        <svg
          className="fill-current h-4 w-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M6 8l4 4 4-4z" fill="currentColor" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
          {options?.map((option) => (
            <button
              key={option}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => handleClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
