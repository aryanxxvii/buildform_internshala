import React from "react"

const ShowMCQ = ({ id, text, options }) => {
  return (
    <div>
      <div>{text}</div>
      {options?.map((option) => (
        <input value={option}></input>
      ))}
    </div>
  )
}

export default ShowMCQ
