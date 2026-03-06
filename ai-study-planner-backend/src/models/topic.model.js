const mongoose = require("mongoose")

const topicSchema = new mongoose.Schema(
{
    studyPlan:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"StudyPlan",
        required:true
    },

    title:{
        type:String,
        required:true
    },

    status:{
        type:String,
        enum:["pending","in-progress","completed"],
        default:"pending"
    },

    notes:{
        type:String
    }

},
{
    timestamps:true
}
)

module.exports = mongoose.model("Topic",topicSchema)