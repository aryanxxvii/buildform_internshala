import React, { useEffect, useState } from "react"
import AddQ from "./AddQ"
import CreateCloze from "./CreateCloze"
import CreateComprehension from "./CreateComprehension"
import CreateCategorize from "./CreateCategorize"
import { useDispatch, useSelector } from "react-redux"
import ShowCloze from "./ShowCloze"
import ShowCategorize from "./ShowCategorize"
import ShowComprehension from "./ShowComprehension"
import axios from "axios"
import { addQuestion, deleteQuestions } from "../redux/slices/creationSlice"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
const Dashboard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(deleteQuestions())
    axios
      .get("https://buildform.onrender.com/api/get-questions")
      .then((response) => {
        const preQuestions = response.data

        preQuestions.forEach((question) => dispatch(addQuestion(question)))
      })
      .catch((error) => {
        console.error("Error fetching questions:", error)
      })
  }, [dispatch])

  const questions = useSelector((state) => state.creation)

  const handleFormSubmit = () => {
    axios
      .delete("https://buildform.onrender.com/api/drop-questions")
      .then(() => {
        // Once the collections are dropped, start adding new questions
        questions.forEach((question) => {
          const q = {
            text: question.questionText,
            type: question.questionType,
            nanoID: question.nanoID,
            image: question.image,
            answers: question.answers,
          }
          axios
            .post("https://buildform.onrender.com/api/questions", q)
            .then((response) => {
              // Handle the response from the server if needed
              console.log("Question posted:", response.data)
            })
            .catch((error) => {
              // Handle errors, if any
              console.error("Error posting question:", error)
            })
        })

        toast("Form edited successfully!")
      })
      .catch((error) => {
        console.error("Error dropping collections:", error)
      })
  }
  return (
    <div className="p-4 md:p-10">
      <div className="text-center pb-8">
        <div className="flex  gap-4 text-center items-center justify-center">
          <h1 className="font-extrabold text-blue-700 text-4xl">
            Form Dashboard
          </h1>
          <div className="flex  gap-2">
            <Link to="/">
              <button className="align-middle flex gap-1 rounded-md bg-green-100 px-4 py-2 text-green-700 font-bold">
                Home
              </button>
            </Link>
            <Link to="/form/view">
              <button className="align-middle flex gap-1 rounded-md bg-blue-100 px-4 py-2 text-blue-700 font-bold">
                View
              </button>
            </Link>
          </div>
        </div>
      </div>

      <AddQ />
      <div className="flex flex-col gap-8">
        {questions.map((question, index) => {
          switch (question.questionType) {
            case "cloze":
              return (
                <ShowCloze
                  key={index}
                  id={question._id}
                  text={question.questionText}
                  answers={question.answers}
                  image={question.image}
                />
              )
            case "comprehension":
              return (
                <ShowComprehension
                  key={index}
                  id={question._id}
                  nanoID={question.nanoID}
                  text={question.questionText}
                  image={question.image}
                />
              )
            case "categorize":
              return (
                <ShowCategorize
                  key={index}
                  id={question._id}
                  text={question.questionText}
                  answers={question.answers}
                  image={question.image}
                />
              )
            default:
              return null
          }
        })}
      </div>
      <button
        onClick={() => handleFormSubmit()}
        className="bg-purple-300 w-48 rounded-md font-bold text-purple-800 h-12 mt-10"
      >
        Submit
      </button>
    </div>
  )
}

export default Dashboard
