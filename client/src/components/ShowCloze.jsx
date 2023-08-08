import React from "react"
import { useDispatch } from "react-redux"
import { deleteQuestion } from "../redux/slices/creationSlice"

const ShowCloze = ({ id, text, answers, image }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(deleteQuestion({ _id: id }))
  }
  return (
    <div className="bg-yellow-100/70 lg:w-1/2 rounded-md p-4 flex flex-col gap-4">
      <img src={image} className="w-48 rounded-md" />
      <div className="flex justify-between gap-4">
        <div className="bg-yellow-200/80 text-yellow-900 text-bold rounded-md font-bold p-2 border-none w-fit">
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
        {answers?.map((option) => (
          <input
            className="border-none rounded-md mb-2 text-center text-yellow-800"
            value={option}
          ></input>
        ))}
      </div>
    </div>
  )
}

export default ShowCloze
