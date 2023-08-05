const Question = require("../models/Question")

exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find()
    res.json(questions)
  } catch (err) {
    res.status(500).json({ error: "Error getting questions from the database" })
  }
}

exports.createQuestion = async (req, res) => {
  try {
    const { questionType, questionText, image, answers } = req.body
    const newQuestion = new Question({
      questionType,
      questionText,
      image,
      answers,
    })
    const savedQuestion = await newQuestion.save()
    res.status(201).json(savedQuestion)
  } catch (err) {
    res.status(400).json({ error: "Error creating question" })
  }
}

exports.getFormQuestions = async (req, res) => {
  try {
    const activeQuestions = await Question.find({ active: true })
    res.json(activeQuestions)
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error getting active questions from the database" })
  }
}
