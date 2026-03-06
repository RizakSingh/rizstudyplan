const mongoose = require("mongoose")

const studyPlanSchema = new mongoose.Schema(
{
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    subject:{
        type:String,
        required:true
    },

    examDate:{
        type:Date,
        required:true
    }

},
{
    timestamps:true
}
)

module.exports = mongoose.model("StudyPlan",studyPlanSchema)