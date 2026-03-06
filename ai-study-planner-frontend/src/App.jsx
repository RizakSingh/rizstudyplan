import {BrowserRouter,Routes,Route} from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import StudyPlans from "./pages/StudyPlans"
import Topics from "./pages/Topics"
import AIChat from "./pages/AIChat"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/login" element={<Login/>} />
<Route path="/register" element={<Register/>} />
<Route path="/" element={<Dashboard/>} />
<Route path="/plans" element={<StudyPlans/>} />
<Route path="/topics/:id" element={<Topics/>} />
<Route path="/ai" element={<AIChat/>} />

</Routes>

</BrowserRouter>

)

}

export default App