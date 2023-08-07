import React from "react"

const ShowCloze = ({ id, text, answers, image }) => {
  return (
    <div className="bg-yellow-100/70 lg:w-1/2 rounded-md p-4 flex flex-col gap-4">
      <img src={image} className="w-48 rounded-md" />
      <input
        className="bg-yellow-200/80 text-yellow-900 text-bold rounded-md font-bold p-2 border-none w-fit"
        value={text}
      ></input>
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
