import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Navbar } from "./Navbar"
import styles from "../styles/login.module.css"

const initInfo = {
    email:"",
    password:""
}

export const Login=()=>{
    const [login,setLogin] = useState(initInfo)
    console.log(login)
    const navigate = useNavigate()
    const handleChange=(e)=>{
        e.preventDefault()
        const {name,value} = e.target
        setLogin({
            ...login,
            [name]:value
        })

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(login.email!==""&& login.password!==""){
            navigate("/volunteerData")
        }
        else{
            alert("Enter complete Credentials")
        }

    }
    return(<>
    <Navbar/>
    <form className={styles.form_container} onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="Enter Email" name="email" />
        <br />
        <input onChange={handleChange} type="password" placeholder="Enter password" name="password" />
        <br />
        <button type="submit">Login</button>
    </form>
    </>)
}