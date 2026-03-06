import {Link,useNavigate} from "react-router-dom"

function Navbar(){

const navigate = useNavigate()

const logout = ()=>{
localStorage.removeItem("token")
navigate("/login")
}

return(

<div className="bg-blue-600 text-white p-4 flex justify-between">

<h1 className="font-bold text-lg">AI Study Planner</h1>

<div className="flex gap-4 items-center">

<Link to="/">Dashboard</Link>
<Link to="/plans">Study Plans</Link>
<Link to="/ai">AI Help</Link>

<button
onClick={logout}
className="bg-red-500 px-3 py-1 rounded"
>
Logout
</button>

</div>

</div>

)

}

export default Navbar