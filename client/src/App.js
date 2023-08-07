import { DndProvider } from "react-dnd"
import "./App.css"
import Form from "./components/Form"
import Dashboard from "./components/Dashboard"
import React from "react"
import { HTML5Backend } from "react-dnd-html5-backend"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import { ToastContainer } from "react-toastify"
function App() {
  return (
    <div className="App ">
      <DndProvider backend={HTML5Backend}>
        <ToastContainer />
        <Router>
          <Routes>
            <Route path="/form/edit" exact element={<Dashboard />} />
            <Route path="/form/view" exact element={<Form />} />
            <Route path="/" exact element={<Home />} />
          </Routes>
        </Router>
      </DndProvider>
    </div>
  )
}

export default App
