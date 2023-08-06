import React from "react"

const ShowCategorize = ({ id, text, answers }) => {
  return (
    <div>
      <input value={text}></input>
      <div className="flex">
        <div className="flex flex-col">
          {answers[0].map((option) => (
            <input value={option}></input>
          ))}
        </div>
        <div className="flex flex-col">
          {answers[1].map((option) => (
            <input value={option}></input>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShowCategorize
