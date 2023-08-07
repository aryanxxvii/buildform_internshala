import React from "react"

const ShowCategorize = ({ id, text, answers, image }) => {
  return (
    <div className="bg-blue-100/70 lg:w-1/2 rounded-md p-4 flex flex-col gap-4">
      <img src={image} className="w-48 rounded-md" />
      <div className="bg-blue-200/80 text-blue-900 text-bold rounded-md font-bold p-2 border-none w-fit">
        {text}
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
