const express = require("express")
const router = express.Router()
const Question = require("../models/Question.js")

// Route to post a new question
router.post("/submission", async (req, res) => {
  const { title, content } = req.body
  try {
    console.log(req.body)
    // const newSubmission = new Submission({ title, content })
    // await newSubmission.save()
    res.status(201).json(newSubmission)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

module.exports = router
