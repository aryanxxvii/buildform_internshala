import React from "react"
import { useDispatch } from "react-redux"
import { deleteQuestion } from "../redux/slices/creationSlice"
const ShowCategorize = ({ id, text, answers, image }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    const del = {
      _id: id,
    }
    dispatch(deleteQuestion(del))
  }
  return (
    <div className="bg-blue-100/70 lg:w-1/2 rounded-md p-4 flex flex-col gap-4">
      <img src={image} className="w-48 rounded-md" />
      <div className="flex gap-4">
        <div className="bg-blue-200/80 text-blue-900 text-bold rounded-md font-bold p-2 border-none w-fit">
          {text}
        </div>
        <button
          className="bg-white rounded-md h-fit px-4 py-2"
          onClick={handleClick}
        >
          Remove
        </button>
      </div>

      <div className="flex gap-4 flex-wrap">
        <div className="flex gap-4 flex-wrap">
          {answers[0].map((option) => (
            <input
              className="border-none rounded-md mb-2 text-center text-blue-800"
              value={option}
            ></input>
          ))}
        </div>
        <div className="flex gap-4 flex-wrap">
          {answers[1].map((option) => (
            <input
              className="border-none rounded-md mb-2 text-center text-blue-800"
              value={option}
            ></input>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShowCategorize
