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
    <div>
      <h1>Form Dashboard</h1>

      <AddQ />
      <div>
        {questions.map((question, index) => {
          switch (question.questionType) {
            case "cloze":
              return (
                <ShowCloze
                  key={index}
                  id={question._id}
                  text={question.questionText}
                  answers={question.answers}
                />
              )
            case "comprehension":
              return (
                <ShowComprehension
                  key={index}
                  id={question._id}
                  nanoID={question.nanoID}
                  text={question.questionText}
                />
              )
            case "categorize":
              return (
                <ShowCategorize
                  key={index}
                  id={question._id}
                  text={question.questionText}
                  answers={question.answers}
                />
              )
            default:
              return null
          }
        })}
      </div>
      <button onClick={() => handleFormSubmit()}>Submit</button>
    </div>
  )
}

export default Dashboard
