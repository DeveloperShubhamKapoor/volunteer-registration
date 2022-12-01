import { Route, Routes } from "react-router-dom"
import { Homepage } from "../components/Homepage"
import { Login } from "../components/Login"
import { VolunteerRegister } from "../components/VolunteerRegister"

export const AllRoutes=()=>{

    return(
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/register" element={<VolunteerRegister/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
    )
}