const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
  questionType: {
    type: String,
    enum: ["category", "comprehension", "cloze"],
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  answers: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
})

const Question = mongoose.model("Question", questionSchema)

module.exports = Question
