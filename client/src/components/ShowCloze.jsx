import React from "react"

const ShowCloze = ({ id, text, answers }) => {
  return (
    <div>
      <input value={text}></input>
      <div>
        {answers?.map((option) => (
          <input value={option}></input>
        ))}
      </div>
    </div>
  )
}

export default ShowCloze
