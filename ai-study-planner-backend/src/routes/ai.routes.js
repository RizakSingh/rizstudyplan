const express = require("express")
const router = express.Router()

const protect = require("../middleware/auth.middleware")

const { askQuestion } = require("../controllers/ai.controller")

router.post("/ask", protect, askQuestion)

module.exports = router