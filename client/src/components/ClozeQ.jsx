import React, { useEffect, useState } from "react"
import { useDrag } from "react-dnd"
import { useDrop } from "react-dnd"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import DroppableBlank from "./DroppableBlank"
import DraggableOption from "./DraggableOption"
import { addAnswer } from "../redux/slices/submissionSlice"

const ClozeQ = ({ question, options }) => {
  const dispatch = useDispatch()
  const [droppedOptions, setDroppedOptions] = useState({})
  useEffect(() => {
    const answers = [droppedOptions[0.5], droppedOptions[2.5]]

    dispatch(addAnswer({ type: "cloze", qid: question._id, answers }))
  }, [droppedOptions])
  const handleDrop = (option, blank) => {
    setDroppedOptions({ ...droppedOptions, [blank]: option })
  }

  return (
    <div>
      <div className="flex gap-1">
        {question.text.split(" ").map((word, index) => {
          if (word === "____") {
            const blankIndex = index / 2
            const droppedOption = droppedOptions[blankIndex] || null

            return (
              <DroppableBlank
                key={blankIndex}
                blank={word}
                droppedOption={droppedOption}
                onDrop={(option) => handleDrop(option, blankIndex)}
              />
            )
          }

          return <span key={index}>{word} </span>
        })}
      </div>

      <div className="options-container flex gap-4 mx-10">
        {options.map((option, index) => (
          <DraggableOption key={index} option={option} />
        ))}
      </div>
    </div>
  )
}

export default ClozeQ
