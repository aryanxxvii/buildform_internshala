import React from "react"
import ClozeQ from "./ClozeQ"
import ComprehensionQ from "./ComprehensionQ"
import CategorizeQ from "./CategorizeQ"

const Form = ({ questions }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    return null
  }

  var questionCount = 1
  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          {["comprehension", "cloze", "categorize"].includes(question.type) ? (
            <div className="font-bold">{questionCount}</div>
          ) : null}
          {question.type === "cloze" ? (
            <ClozeQ
              question={question}
              options={question.options}
              count={questionCount++}
            />
          ) : question.type === "categorize" ? (
            <CategorizeQ question={question} count={questionCount++} />
          ) : question.type === "comprehension" ? (
            <ComprehensionQ question={question} count={questionCount++} />
          ) : null}
        </div>
      ))}
      <button type="submit" onClick={handleSubmit} className="bg-purple-400">
        Submit
      </button>
    </div>
  )
}

export default Form
