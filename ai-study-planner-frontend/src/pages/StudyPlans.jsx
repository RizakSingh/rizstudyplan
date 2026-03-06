import {useState,useEffect} from "react"
import API from "../api/axios"
import Navbar from "../components/Navbar"

function StudyPlans(){

const [plans,setPlans] = useState([])
const [subject,setSubject] = useState("")
const [examDate,setExamDate] = useState("")

const fetchPlans = async()=>{
const res = await API.get("/studyplans")
setPlans(res.data.data)
}

useEffect(()=>{
fetchPlans()
},[])

const createPlan = async()=>{

await API.post("/studyplans",{
subject,
examDate
})

fetchPlans()

}

return(

<div>

<Navbar/>

<div className="p-6">

<h2 className="text-xl font-bold mb-4">Create Study Plan</h2>

<div className="flex gap-3 mb-6">

<input
className="border p-2"
placeholder="Subject"
onChange={(e)=>setSubject(e.target.value)}
/>

<input
type="date"
className="border p-2"
onChange={(e)=>setExamDate(e.target.value)}
/>

<button
className="bg-blue-500 text-white px-4"
onClick={createPlan}
>
Add
</button>

</div>

<h2 className="text-xl font-bold mb-4">Your Plans</h2>

<div className="grid gap-4">

{plans.map(plan=>(
<div key={plan._id} className="bg-purple-200 p-4 rounded">

<h3 className="font-bold">{plan.subject}</h3>
<p>Exam: {new Date(plan.examDate).toLocaleDateString()}</p>

</div>
))}

</div>

</div>

</div>

)

}

export default StudyPlans