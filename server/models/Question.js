const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
  questionType: {
    type: String,
    enum: ["categorize", "comprehension", "cloze", "mcq"],
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  nanoID: {
    type: String,
  },
  image: {
    type: String,
  },
  answers: {
    type: mongoose.Schema.Types.Mixed,
  },
  active: {
    type: Boolean,
    required: true,
  },
})

const Question = mongoose.model("Question", questionSchema)

module.exports = Question
