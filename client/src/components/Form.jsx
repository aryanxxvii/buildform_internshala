import React, { useEffect, useState } from "react"
import ClozeQ from "./ClozeQ"
import ComprehensionQ from "./ComprehensionQ"
import CategorizeQ from "./CategorizeQ"
import { useSelector } from "react-redux"
import axios from "axios"
const Form = () => {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    // Fetch all questions from the backend when the component mounts
    axios
      .get("http://localhost:8080/api/get-questions") // Replace with your backend API endpoint for getting questions
      .then((response) => {
        // Update the 'questions' state with the retrieved questions
        setQuestions(response.data)
      })
      .catch((error) => {
        console.error("Error fetching questions:", error)
      })
  }, [])

  const submissions = useSelector((state) => state.submission)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("SUBMISSIONS", submissions)
  }

  var questionCount = 1
  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          {["comprehension", "cloze", "categorize"].includes(
            question.questionType
          ) ? (
            <div className="font-bold">{questionCount}</div>
          ) : null}
          {question.questionType === "cloze" ? (
            <ClozeQ question={question} count={questionCount++} />
          ) : question.questionType === "categorize" ? (
            <CategorizeQ question={question} count={questionCount++} />
          ) : question.questionType === "comprehension" ? (
            <ComprehensionQ question={question} count={questionCount++} />
          ) : null}
        </div>
      ))}
      <button type="submit" onClick={handleSubmit} className="bg-purple-400">
        Submit
      </button>
    </div>
  )
}

export default Form
