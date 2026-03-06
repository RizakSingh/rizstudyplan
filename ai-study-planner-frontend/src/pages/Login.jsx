import {useState} from "react"
import API from "../api/axios"

function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = async()=>{

const res = await API.post("/auth/login",{
email,
password
})

localStorage.setItem("token",res.data.token)

}

return(

<div className="flex items-center justify-center h-screen">

<div className="bg-white p-6 shadow rounded">

<h2 className="text-xl font-bold mb-4">Login</h2>

<input
className="border p-2 w-full mb-3"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
className="border p-2 w-full mb-3"
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
className="bg-blue-500 text-white px-4 py-2 w-full"
onClick={handleLogin}
>
Login
</button>

</div>
<p className="text-center mt-3">
No account? <a href="/register" className="text-blue-500">Register</a>
</p>
</div>

)

}

export default Login