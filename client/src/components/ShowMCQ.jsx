import React from "react"

const ShowMCQ = ({ id, text, options }) => {
  return (
    <div>
      <div className="font-bold text-green-800 mb-2">{text}</div>
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
