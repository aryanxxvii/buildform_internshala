import React, { useState } from "react"
import CreateCloze from "./CreateCloze"
import CreateComprehension from "./CreateComprehension"
import CreateCategorize from "./CreateCategorize"
import axios from "axios"
import { useDispatch } from "react-redux"
import { deleteQuestions } from "../redux/slices/creationSlice"
const AddQ = () => {
  const [showCloze, setShowCloze] = useState(false)
  const [showComprehension, setShowComprehension] = useState(false)
  const [showCategorize, setShowCategorize] = useState(false)
  const dispatch = useDispatch()
  const handleDelete = () => {
    axios.delete("http://localhost:8080/api/drop-questions").then(() => {
      dispatch(deleteQuestions())
    })
  }
  const handleAddQuestion = (type) => {
    switch (type) {
      case "cloze":
        setShowCloze(true)
        setShowComprehension(false)
        setShowCategorize(false)
        break
      case "comprehension":
        setShowCloze(false)
        setShowComprehension(true)
        setShowCategorize(false)
        break
      case "categorize":
        setShowCloze(false)
        setShowComprehension(false)
        setShowCategorize(true)
        break
      default:
        break
    }
  }

  return (
    <div className="flex flex-col items-start">
      <button onClick={() => handleAddQuestion("cloze")}>
        Add Cloze Question
      </button>
      <button onClick={() => handleAddQuestion("comprehension")}>
        Add Comprehension Question
      </button>
      <button onClick={() => handleAddQuestion("categorize")}>
        Add Categorize Question
      </button>
      <button onClick={() => handleDelete()}>Remove All</button>

      {/* Render the corresponding question component based on the selected type */}
      {showCloze && <CreateCloze />}
      {showComprehension && <CreateComprehension />}
      {showCategorize && <CreateCategorize />}
    </div>
  )
}

export default AddQ
