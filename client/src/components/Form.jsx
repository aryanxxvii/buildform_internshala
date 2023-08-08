import React, { useEffect, useState } from "react"
import ClozeQ from "./ClozeQ"
import ComprehensionQ from "./ComprehensionQ"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import CategorizeQ from "./CategorizeQ"
import { useSelector } from "react-redux"
import axios from "axios"
import { Link } from "react-router-dom"
const Form = () => {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    // Fetch all questions from the backend when the component mounts
    axios
      .get("https://buildform.onrender.com/api/get-questions") // Replace with your backend API endpoint for getting questions
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
    toast("Form submitted successfully!")
  }

  var questionCount = 1
  return (
    <div className="flex flex-col mx-8 md:mx-32 mt-10 min-w-1/2 mb-10">
      <div className="flex gap-4 md:gap-8 mb-8 flex-col md:flex-row">
        <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
          Fillable Form
        </h1>
        <div className="flex gap-4">
          <Link to="/">
            <button className="align-middle flex gap-1 rounded-md bg-green-100 px-4 py-2 text-green-700 font-bold">
              Home
            </button>
          </Link>
          <Link to="/form/edit">
            <button className="align-middle flex gap-1 rounded-md bg-blue-100 px-4 py-2 text-blue-700 font-bold">
              Edit
            </button>
          </Link>
        </div>
      </div>

      {questions.map((question, index) => (
        <div key={index} className="flex gap-4">
          <div>
            {["comprehension", "cloze", "categorize"].includes(
              question.questionType
            ) ? (
              <div className="font-bold">{questionCount}</div>
            ) : null}
          </div>

          {question.questionType === "cloze" ? (
            <ClozeQ question={question} count={questionCount++} />
          ) : question.questionType === "categorize" ? (
            <CategorizeQ question={question} count={questionCount++} />
          ) : question.questionType === "comprehension" ? (
            <ComprehensionQ question={question} count={questionCount++} />
          ) : null}
        </div>
      ))}
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-purple-500 w-48 rounded-md font-bold text-white h-12"
      >
        Submit
      </button>
    </div>
  )
}

export default Form
