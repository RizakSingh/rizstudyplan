import React from 'react'

const Navbar = () => {
  return (
<div className="bg-blue-600 text-white p-4 flex justify-between">

<h1 className="font-bold text-lg">AI Study Planner</h1>

<div className="flex gap-4">

<Link to="/">Dashboard</Link>
<Link to="/plans">Study Plans</Link>
<Link to="/ai">AI Help</Link>

</div>

</div>
  )
}

export default Navbar
