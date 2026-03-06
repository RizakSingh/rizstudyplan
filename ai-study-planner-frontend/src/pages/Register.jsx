import {useState} from "react"
import {useNavigate} from "react-router-dom"
import API from "../api/axios"

function Register(){

const navigate = useNavigate()

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleRegister = async()=>{

try{

const res = await API.post("/auth/register",{
name,
email,
password
})

localStorage.setItem("token",res.data.token)

navigate("/")

}catch(error){

alert("Registration failed")

}

}

return(

<div className="flex items-center justify-center h-screen bg-purple-100">

<div className="bg-white p-6 rounded shadow w-80">

<h2 className="text-xl font-bold mb-4 text-center">
Register
</h2>

<input
className="border p-2 w-full mb-3"
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
className="border p-2 w-full mb-3"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
className="border p-2 w-full mb-3"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
className="bg-purple-500 text-white w-full py-2 rounded"
onClick={handleRegister}
>
Register
</button>

</div>

</div>

)

}

export default Register