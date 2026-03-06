const express = require("express")
const cors = require("cors")

const authRoutes = require("./routes/auth.routes")
const studyPlanRoutes = require("./routes/studyPlan.routes")
const topicRoutes = require("./routes/topic.routes")
const aiRoutes = require("./routes/ai.routes")
const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("AI Study Planner API Running")
})

app.use("/api/auth",authRoutes)
app.use("/api/studyplans",studyPlanRoutes)
app.use("/api/topics",topicRoutes)
app.use("/api/ai", aiRoutes)
module.exports = app