import React, { useState } from "react"
import CreateCloze from "./CreateCloze"
import CreateComprehension from "./CreateComprehension"
import CreateCategorize from "./CreateCategorize"
import axios from "axios"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
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
      case "cancel":
        setShowCloze(false)
        setShowComprehension(false)
        setShowCategorize(false)
        break
      default:
        break
    }
  }

  return (
    <div className="flex flex-col mb-8 items-center gap-6">
      <div className="flex flex-col md:flex-row gap-3 md:gap-8 text-center align-middle items-center">
        <button
          onClick={() => handleAddQuestion("cloze")}
          className="align-middle flex gap-1 rounded-md bg-yellow-100 px-4 py-2 text-yellow-700 font-bold"
        >
          <AddCircleOutlineIcon className="" /> Cloze Question
        </button>
        <button
          onClick={() => handleAddQuestion("comprehension")}
          className="align-middle flex gap-1 rounded-md bg-green-100 px-4 py-2 text-green-700 font-bold"
        >
          <AddCircleOutlineIcon className="" /> Comprehension Question
        </button>
        <button
          onClick={() => handleAddQuestion("categorize")}
          className="align-middle flex gap-1 rounded-md bg-blue-100 px-4 py-2 text-blue-700 font-bold"
        >
          <AddCircleOutlineIcon className="" /> Categorize Question
        </button>

        <button
          onClick={() => handleAddQuestion("cancel")}
          className="align-middle flex gap-1 rounded-md bg-gray-200 px-4 py-2 text-gray-700 font-bold "
        >
          Close
        </button>
      </div>

      <button
        onClick={() => handleDelete()}
        className="align-middle flex gap-1 rounded-md bg-red-100 px-4 py-2 text-red-700 font-bold"
      >
        Remove All
      </button>

      {/* Render the corresponding question component based on the selected type */}
      {showCloze && <CreateCloze />}
      {showComprehension && <CreateComprehension />}
      {showCategorize && <CreateCategorize />}
    </div>
  )
}

export default AddQ
