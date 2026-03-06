import {BrowserRouter,Routes,Route} from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import StudyPlans from "./pages/StudyPlans"
import Topics from "./pages/Topics"
import AIChat from "./pages/AIChat"

import ProtectedRoute from "./components/ProtectedRoute"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/login" element={<Login/>} />
<Route path="/register" element={<Register/>} />

<Route
path="/"
element={
<ProtectedRoute>
<Dashboard/>
</ProtectedRoute>
}
/>

<Route
path="/plans"
element={
<ProtectedRoute>
<StudyPlans/>
</ProtectedRoute>
}
/>

<Route
path="/topics/:id"
element={
<ProtectedRoute>
<Topics/>
</ProtectedRoute>
}
/>

<Route
path="/ai"
element={
<ProtectedRoute>
<AIChat/>
</ProtectedRoute>
}
/>

</Routes>

</BrowserRouter>

)

}

export default App