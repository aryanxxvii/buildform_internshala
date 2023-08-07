import React, { useEffect, useState } from "react"
import MCQ from "./MCQ"
import axios from "axios"

const ComprehensionQ = ({ question }) => {
  // Make a call to see all questions in the database
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    // Fetch all questions from the backend when the component mounts
    axios
      .get("http://localhost:8080/api/get-questions") // Replace with your backend API endpoint for getting questions
      .then((response) => {
        // Update the 'questions' state with the retrieved questions
        setQuestions(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error fetching questions:", error)
      })
  }, [])

  const mcqs = questions.filter((question) => question.questionType === "mcq")

  return (
    <div className="w-1/2">
      <div className="bg-purple-100 rounded-md p-2 text-purple-800 italic mb-3 gap-2 flex flex-col">
        <img src={question.image} className="rounded-md w-full aspect-[10/4]" />
        <h1 className="">{question.questionText}</h1>
      </div>

      <div className="ml-8">
        {mcqs?.map((mcq) => (
          <MCQ question={mcq} />
        ))}
      </div>
    </div>
  )
}

export default ComprehensionQ
