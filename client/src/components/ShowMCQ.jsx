import React from "react"
import { useDispatch } from "react-redux"
import { deleteQuestion } from "../redux/slices/creationSlice"
const ShowMCQ = ({ id, text, options }) => {
  const dispatch = useDispatch()
  const del = {
    _id: id,
  }
  const handleClick = () => {
    dispatch(deleteQuestion(del))
  }
  return (
    <div>
      <div className="flex align-middle items-center gap-4 justify-between mb-2">
        <div className="font-bold text-green-800 mb-2">{text}</div>
        <button
          className="bg-white rounded-md h-fit px-4 py-2"
          onClick={handleClick}
        >
          Remove
        </button>
      </div>

      <div className="ml-8 flex gap-4 flex-wrap text-green-800">
        {options?.map((option, index) => (
          // <div key={index} className="md:w-1/2 flex ">
          <input
            className="border-none rounded-md mb-2 text-center"
            value={option}
          ></input>
          // </div>
        ))}
      </div>
    </div>
  )
}

export default ShowMCQ
