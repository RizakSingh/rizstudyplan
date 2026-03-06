const Topic = require("../models/topic.model")


// CREATE TOPIC
const createTopic = async (req,res)=>{

    try{

        const {studyPlan,title} = req.body

        const topic = await Topic.create({
            studyPlan,
            title
        })

        res.status(201).json({
            success:true,
            data:topic
        })

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        })

    }

}


// GET TOPICS BY STUDY PLAN
const getTopics = async (req,res)=>{

    try{

        const topics = await Topic.find({
            studyPlan:req.params.studyPlanId
        })

        res.json({
            success:true,
            data:topics
        })

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        })

    }

}


// UPDATE TOPIC STATUS
const updateTopicStatus = async (req,res)=>{

    try{

        const {status} = req.body

        const topic = await Topic.findByIdAndUpdate(

            req.params.id,
            {status},
            {new:true}

        )

        res.json({
            success:true,
            data:topic
        })

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        })

    }

}


// DELETE TOPIC
const deleteTopic = async (req,res)=>{

    try{

        await Topic.findByIdAndDelete(req.params.id)

        res.json({
            success:true,
            message:"Topic deleted"
        })

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        })

    }

}

module.exports = {

    createTopic,
    getTopics,
    updateTopicStatus,
    deleteTopic

}