import { useState } from "react"
import { useEffect } from "react"
import{Navbar} from "./Navbar"
import styles from "../styles/volunteerData.module.css"


export const VolunteerData=()=>{
    const [volunteerData,setVolunteerData] = useState([])
    const [loading,setLoading] = useState(true)
    console.log(volunteerData)
    useEffect(()=>{
        fetch("http://localhost:5500/volunteer")
        .then((res)=>res.json())
        .then((res)=>setVolunteerData(res.data))
        .then(()=>setLoading(false))
    },[])
    return(
        <>
        <Navbar/>
        {loading ? <p className={styles.set_heading}>Loading...</p>:
        
        <div>
            <div className={styles.set_heading}> 
                <h4>Registered Volunteers</h4>
            </div>
            <div className={styles.data_display_container}>
                <table className={styles.set_display_table}>
                    <thead className={styles.set_data_heading}>
                        <tr>
                            <td>Volunteer Name</td>
                            <td>City</td>
                            <td>Contact Info</td>
                            <td>Language</td>
                            <td>Available on</td>
                        </tr>
                    </thead>
                    {volunteerData.map((item)=>(
                    <tbody className={styles.set_data_info}>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.location}</td>
                            <td>{item.mobile}</td>
                            <td>{item.spokenLanguage.map((lang)=>(
                                <td>{lang}</td>
                            ))}</td>
                            <td>{item.daysAvailable.map((available)=>(
                                <td>{available}</td>
                            ))}</td>
                        </tr>
                    </tbody>
                ))}
                </table>
            </div>
        </div>
        }
        </>
    )
}