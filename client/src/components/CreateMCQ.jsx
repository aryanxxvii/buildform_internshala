// CreateMCQ.js
import React, { useState } from "react"

const CreateMCQ = ({ onSaveMCQ, nanoID }) => {
  const [questionText, setQuestionText] = useState("")
  const [options, setOptions] = useState(["", "", "", ""])

  const handleQuestionTextChange = (e) => {
    setQuestionText(e.target.value)
  }

  const handleOptionChange = (index, e) => {
    setOptions((prevOptions) => {
      const updatedOptions = [...prevOptions]
      updatedOptions[index] = e.target.value
      return updatedOptions
    })
  }

  const handleSave = () => {
    const mcqData = {
      nanoID: nanoID,
      questionText: questionText,
      options: options,
    }
    onSaveMCQ(mcqData)
  }

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="MCQ Question Text"
        value={questionText}
        className="bg-gray-200 rounded-md border-none mt-10"
        onChange={handleQuestionTextChange}
      />
      {options.map((option, index) => (
        <input
          key={index}
          type="text"
          className="bg-gray-200 rounded-md border-none"
          placeholder={`Option ${index + 1}`}
          value={option}
          onChange={(e) => handleOptionChange(index, e)}
        />
      ))}
      <div className="text-center">
        <button
          onClick={handleSave}
          className="bg-green-200 text-green-800 rounded-md px-4 py-2 w-fit"
        >
          Save this MCQ
        </button>
      </div>
    </div>
  )
}

export default CreateMCQ
