import React from "react"
import MCQ from "./MCQ"

const ComprehensionQ = ({ question }) => {
  // Make a call to see all questions in the database
  // Find the ones with type = mcq and parent element = question._id
  const mcqs = [
    {
      _id: "4",
      type: "mcq",
      parentId: "3",
      text: "Who are you?",
      image: null,
      options: ["Blank Nigger", "White Nigger", "Yellow Nigger", "Blue Nigger"],
    },
    {
      _id: "5",
      type: "mcq",
      parentId: "3",
      text: "Who are you?",
      image: null,
      options: ["Blank Nigger", "White Nigger", "Yellow Nigger", "Blue Nigger"],
    },
    {
      _id: "6",
      type: "mcq",
      parentId: "3",
      text: "Who are you?",
      image: null,
      options: ["Blank Nigger", "White Nigger", "Yellow Nigger", "Blue Nigger"],
    },
  ]
  return (
    <div className="w-64">
      <h1>{question.text}</h1>
      {mcqs.map((mcq) => (
        <MCQ question={mcq} />
      ))}
    </div>
  )
}

export default ComprehensionQ
