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
    <div>
      <input
        type="text"
        placeholder="MCQ Question Text"
        value={questionText}
        onChange={handleQuestionTextChange}
      />
      {options.map((option, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Option ${index + 1}`}
          value={option}
          onChange={(e) => handleOptionChange(index, e)}
        />
      ))}
      <button onClick={handleSave}>Save MCQ</button>
    </div>
  )
}

export default CreateMCQ
