import React, { useState } from "react"
import { useDrag } from "react-dnd"
import { useDrop } from "react-dnd"

const DroppableBlank = ({ blank, droppedOption, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "option",
    drop: (item) => {
      onDrop(item.option)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  })

  return (
    <div
      ref={drop}
      className={`bg-gray-300 rounded-md font-bold px-2 ${
        isOver ? "hovered" : ""
      }`}
    >
      {droppedOption ? (
        droppedOption
      ) : (
        <div className="flex justify-center w-10"></div>
      )}
    </div>
  )
}

export default DroppableBlank
