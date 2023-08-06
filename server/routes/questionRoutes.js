const express = require("express")
const router = express.Router()
const questionController = require("../controllers/questionController")

// Route to get all questions
router.get("/questions", async (req, res) => {
  try {
    const questions = await Question.find()
    res.json(questions)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Route to post a new question
router.post("/questions", questionController.createQuestion)
router.delete("/drop-questions", questionController.dropQuestions)
router.get("/get-questions", questionController.getQuestions)
module.exports = router
