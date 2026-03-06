const express = require("express")
const router = express.Router()

const protect = require("../middleware/auth.middleware")

const {
    createTopic,
    getTopics,
    updateTopicStatus,
    deleteTopic
} = require("../controllers/topic.controller")


// create topic
router.post("/", protect, createTopic)

// get topics by study plan
router.get("/:studyPlanId", protect, getTopics)

// update topic status
router.patch("/:id", protect, updateTopicStatus)

// delete topic
router.delete("/:id", protect, deleteTopic)

module.exports = router