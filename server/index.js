const dotenv = require("dotenv")

const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")
dotenv.config()
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

const app = express()
const port = 8080
app.use(cors())
// Parse JSON data in the request body
app.use(express.json())

// Use the defined routes
const questionRoutes = require("./routes/questionRoutes.js")
app.use("/api", questionRoutes)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

db.on("error", console.error.bind(console, "MongoDB connection error:"))
db.once("open", () => {
  console.log("Connected to MongoDB successfully!")
})
