const Question = require("../models/Question")

exports.getQuestions = async (req, res) => {
  // try {
  const questions = await Question.find()
  res.status(200).json(questions)
  // } catch (err) {
  //   res.status(500).json({ error: "Error getting questions from the database" })
  // }
}
exports.dropQuestions = async (req, res) => {
  try {
    // Drop the entire 'questions' collection
    await Question.deleteMany({})
    console.log("DELETED")
    res.json({ message: "All collections dropped successfully." })
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error dropping collections.", error: err.message })
  }
}
exports.createQuestion = async (req, res) => {
  const { type, text, image, answers, nanoID } = req.body

  const newQuestion = new Question({
    questionType: type,
    questionText: text,
    image,
    nanoID,
    answers,
    active: true,
  })

  await newQuestion.save()
  res.status(201).json(newQuestion)
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
