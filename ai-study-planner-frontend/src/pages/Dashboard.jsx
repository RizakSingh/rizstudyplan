import Navbar from "../components/Navbar"

function Dashboard(){

return(

<div>

<Navbar/>

<div className="p-6">

<h2 className="text-2xl font-bold mb-6">Dashboard</h2>

<div className="grid grid-cols-3 gap-6">

<div className="bg-green-400 text-white p-6 rounded">
<h3>Total Plans</h3>
<p className="text-2xl">3</p>
</div>

<div className="bg-yellow-400 text-white p-6 rounded">
<h3>Total Topics</h3>
<p className="text-2xl">15</p>
</div>

<div className="bg-blue-400 text-white p-6 rounded">
<h3>Completed</h3>
<p className="text-2xl">7</p>
</div>

</div>

</div>

</div>

)

}

export default Dashboard