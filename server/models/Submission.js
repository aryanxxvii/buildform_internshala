const mongoose = require("mongoose")

const submissionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  answers: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
})

const Submission = mongoose.model("Submission", submissionSchema)

module.exports = Submission
