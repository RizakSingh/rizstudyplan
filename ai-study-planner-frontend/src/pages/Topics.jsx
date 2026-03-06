import {useState,useEffect} from "react"
import API from "../api/axios"
import {useParams} from "react-router-dom"
import Navbar from "../components/Navbar"

function Topics(){

const {id} = useParams()

const [topics,setTopics] = useState([])
const [title,setTitle] = useState("")

const fetchTopics = async()=>{
const res = await API.get(`/topics/${id}`)
setTopics(res.data.data)
}

useEffect(()=>{
fetchTopics()
},[])

const addTopic = async()=>{

await API.post("/topics",{
studyPlan:id,
title
})

fetchTopics()

}

return(

<div>

<Navbar/>

<div className="p-6">

<h2 className="text-xl font-bold mb-4">Topics</h2>

<div className="flex gap-3 mb-4">

<input
className="border p-2"
placeholder="Topic"
onChange={(e)=>setTitle(e.target.value)}
/>

<button
className="bg-green-500 text-white px-4"
onClick={addTopic}
>
Add
</button>

</div>

<div className="grid gap-3">

{topics.map(topic=>(
<div key={topic._id} className="bg-gray-200 p-3 rounded">

<h3>{topic.title}</h3>
<p>Status: {topic.status}</p>

</div>
))}

</div>

</div>

</div>

)

}

export default Topics