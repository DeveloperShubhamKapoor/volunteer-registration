import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styles from "../styles/volunteerRegister.module.css"
import { Navbar } from "./Navbar";

const initInfo={
    name:"",
    email:"",
    mobile:"",
    location:"",
    spokenLanguage:[],
    daysAvailable:[]
}
export const VolunteerRegister=()=>{
    const [volunteerData,setVolunteerData] = useState(initInfo)
    const [language,setLanguage] = useState("")
    const [daysAvailable,setDaysAvailable] = useState("")
    const [registered,setRegistered] = useState({message:"",registered:false})
    const [loading,setLoading] = useState(false)
    const weekDays = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]

    const handleLanguage=(e)=>{
        e.preventDefault()
        setLanguage(e.target.value)
    }

    const addLanguage=(e)=>{
        e.preventDefault()
        setVolunteerData({
            ...volunteerData,spokenLanguage:[...volunteerData.spokenLanguage,language]
        })
        setLanguage("")
    }

    const handleOnChange=(e)=>{
        e.preventDefault()
        const {name,value} = e.target
        setVolunteerData({
            ...volunteerData,
            [name]:value
        })
    }
    const handleDays=(e)=>{
        e.preventDefault()
        setDaysAvailable(e.target.value)
    }
    const addDaysAvailable=(e)=>{
        e.preventDefault()
        if(weekDays.includes(daysAvailable.toLowerCase())){
            setVolunteerData({
                ...volunteerData,daysAvailable:[...volunteerData.daysAvailable,daysAvailable]
            })
            setDaysAvailable("")
        }
        else{
            alert("Enter a valid week day")
        } 
    }
    const removeDay=(day)=>{
        let days = volunteerData.daysAvailable.filter((item)=>{
            if(day!= item){
                return item
            }
        })
        setVolunteerData({...volunteerData,daysAvailable:days})
    }
    const removeLanguage=(language)=>{
        let languages = volunteerData.spokenLanguage.filter((item)=>{
            if(language!= item){
                return item
            }
        })
        setVolunteerData({...volunteerData,spokenLanguage:languages})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(volunteerData.name!=="" && volunteerData.email!=="" && volunteerData.location!==""
         && volunteerData.daysAvailable.length>0 
         && volunteerData.spokenLanguage.length>0)
         {
            setLoading(true)
            fetch("https://volunteer-registration-backend.up.railway.app/volunteer/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(volunteerData)
            })
            .then((res)=>res.json())
            .then((res)=>setRegistered(res))
            .finally(()=>{
                setLoading(false)
                setVolunteerData(initInfo)
            })
        }
    }
    return(<>
    <Navbar/>
    <form className={styles.form_volunteer} onSubmit={handleSubmit}>
        <div>
            <input onChange={handleOnChange} type="text" placeholder="Enter Name" name="name" value={volunteerData.name} />
            <span>*</span>
        </div>
        <div>
            <input onChange={handleOnChange} type="text" placeholder="Enter email" name="email" value={volunteerData.email} />
            <span>*</span>
        </div>
        <div>
            <input onChange={handleOnChange} type="tel" pattern="[1-9]{1}[0-9]{9}" title="Please Enter 10 digits Number" placeholder="Enter Mobile Number" name="mobile" value={volunteerData.mobile} />
            <span>*</span>
        </div>
        <div>
            <input  onChange={handleOnChange} type="text" placeholder="Enter your city" name="location" value={volunteerData.location} />
            <span>*</span>
        </div>
        <div>
            <input onChange={handleLanguage} type="text" placeholder="Enter spoken language"  value={language} name="language" />
            <span>*</span>
            { language.length>0 && <button className={styles.add_btn_set} onClick={addLanguage}>Add+</button>}
        </div>
        <div>
            {volunteerData.spokenLanguage.length>0? volunteerData.spokenLanguage.map((item)=>(
                    <div className={styles.set_added_data}>
                        {item}
                        <span onClick={()=>removeLanguage(item)}>X</span>
                    </div>
                ))
            : null}
        </div>
        <div>
            <input onChange={handleDays} type="text" placeholder="Enter available days (Mon - Sun)" value={daysAvailable} name="daysAvailable" />
            <span>*</span>
            {daysAvailable.length>0 && <button className={styles.add_btn_set} onClick={addDaysAvailable}>Add+</button>}
        </div>
        <div>
            {volunteerData.daysAvailable.length>0? volunteerData.daysAvailable.map((item)=>(
                    <div className={styles.set_added_data}>
                        {item}
                        <span onClick={()=>removeDay(item)}>X</span>
                        
                    </div>
                ))
            : null}
        </div>
        <div>
            { loading ?<button className={styles.set_register_btn} type="submit">Registering...</button>   
            :<button className={styles.set_register_btn} type="submit">Register</button>}
            {registered.message!=="" ? <p style={{color:"red",marginLeft:"10px",textTransform:"uppercase"}}>{registered.message}</p> :null}
        </div>
    </form>
    </>)
}