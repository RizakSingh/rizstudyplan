const express = require("express")
const router = express.Router()

const protect = require("../middleware/auth.middleware")

const {
    createStudyPlan,
    getStudyPlans,
    deleteStudyPlan
} = require("../controllers/studyPlan.controller")

router.post("/", protect, createStudyPlan)

router.get("/", protect, getStudyPlans)

router.delete("/:id", protect, deleteStudyPlan)

module.exports = router