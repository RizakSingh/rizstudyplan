const StudyPlan = require("../models/studyPlan.model")

// CREATE STUDY PLAN
const createStudyPlan = async (req,res)=>{

    try{

        const {subject,examDate} = req.body

        const studyPlan = await StudyPlan.create({

            user:req.user,
            subject,
            examDate

        })

        res.status(201).json({
            success:true,
            data:studyPlan
        })

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        })

    }

}


// GET USER STUDY PLANS
const getStudyPlans = async (req,res)=>{

    try{

        const plans = await StudyPlan.find({
            user:req.user
        })

        res.json({
            success:true,
            data:plans
        })

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        })

    }

}


// DELETE STUDY PLAN
const deleteStudyPlan = async (req,res)=>{

    try{

        const plan = await StudyPlan.findByIdAndDelete(req.params.id)

        res.json({
            success:true,
            message:"Study plan deleted"
        })

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        })

    }

}

module.exports = {

    createStudyPlan,
    getStudyPlans,
    deleteStudyPlan

}