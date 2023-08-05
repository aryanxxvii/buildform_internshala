import { DndProvider } from "react-dnd"
import "./App.css"
import Form from "./components/Form"
import Dashboard from "./components/Dashboard"
import React from "react"
import { HTML5Backend } from "react-dnd-html5-backend"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
function App() {
  const questions = [
    {
      _id: "1",
      type: "cloze",
      text: "There ____ many trees in ____ field.",
      image: null,
      options: ["are", "the"],
    },
    {
      _id: "2",
      type: "categorize",
      text: "This is categorize question",
      image: null,
      options: [
        ["Italy", "Delhi"],
        ["Country", "State"],
      ],
    },
    {
      _id: "3",
      type: "comprehension",
      text: "I am a black nigger.I am a black nigger.I am a black nigger.I am a black nigger.I am a black nigger.I am a black nigger.I am a black nigger.I am a black nigger.",
    },
    {
      _id: "4",
      type: "mcq",
      parentId: "3",
      text: "Who are you?",
      image: null,
      options: [
        ["Blank Nigger", "White Nigger", "Yellow Nigger", "Blue Nigger"],
      ],
    },
    {
      _id: "5",
      type: "mcq",
      parentId: "3",
      text: "Who are you?",
      image: null,
      options: [
        ["Blank Nigger", "White Nigger", "Yellow Nigger", "Blue Nigger"],
      ],
    },
    {
      _id: "6",
      type: "mcq",
      parentId: "3",
      text: "Who are you?",
      image: null,
      options: [
        ["Blank Nigger", "White Nigger", "Yellow Nigger", "Blue Nigger"],
      ],
    },
  ]

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Router>
          <Routes>
            <Route path="/form/edit" exact element={<Dashboard />} />
            <Route
              path="/form/view"
              exact
              element={<Form questions={questions} />}
            />
          </Routes>
        </Router>
      </DndProvider>
    </div>
  )
}

export default App
