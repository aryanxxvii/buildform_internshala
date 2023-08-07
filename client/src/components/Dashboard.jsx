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
import { addQuestion } from "../redux/slices/creationSlice"
const Dashboard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/get-questions")
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
    console.log("CLICKED")

    axios
      .delete("http://localhost:8080/api/drop-questions")
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
            .post("http://localhost:8080/api/questions", q)
            .then((response) => {
              // Handle the response from the server if needed
              console.log("Question posted:", response.data)
            })
            .catch((error) => {
              // Handle errors, if any
              console.error("Error posting question:", error)
            })
        })
      })
      .catch((error) => {
        console.error("Error dropping collections:", error)
      })
  }
  return (
    <div className="p-10">
      <div className="text-center pb-8">
        <h1 className="font-extrabold text-blue-700 text-4xl">
          Form Dashboard
        </h1>
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
