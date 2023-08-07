import React, { useState } from "react"
import { useDrag } from "react-dnd"
import { useDrop } from "react-dnd"

const DraggableOption = ({ option }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "option",
    item: { option },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  return (
    <div
      ref={drag}
      className={`draggable-option bg-purple-600  font-bold text-white px-2 rounded-md ${
        isDragging ? "dragging" : ""
      }`}
    >
      {option}
    </div>
  )
}

export default DraggableOption
