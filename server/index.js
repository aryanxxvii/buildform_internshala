const express = require("express")
const mongoose = require("mongoose")
const questionController = require("./controllers/questionController")

const app = express()
const port = 8080

app.get("/api/questions", questionController.getQuestions)
app.post("/api/questions", questionController.createQuestion)
app.get("/api/form-questions", questionController.getFormQuestions)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
