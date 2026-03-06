import {useState} from "react"
import API from "../api/axios"
import Navbar from "../components/Navbar"

function AIChat(){

const [question,setQuestion] = useState("")
const [answer,setAnswer] = useState("")

const askAI = async()=>{

const res = await API.post("/ai/ask",{question})

setAnswer(res.data.answer)

}

return(

<div>

<Navbar/>

<div className="p-6">

<h2 className="text-xl font-bold mb-4">AI Study Assistant</h2>

<input
className="border p-2 w-full mb-3"
placeholder="Ask something..."
onChange={(e)=>setQuestion(e.target.value)}
/>

<button
className="bg-blue-500 text-white px-4 py-2"
onClick={askAI}
>
Ask AI
</button>

<div className="mt-4 bg-gray-100 p-4 rounded">

{answer}

</div>

</div>

</div>

)

}

export default AIChat