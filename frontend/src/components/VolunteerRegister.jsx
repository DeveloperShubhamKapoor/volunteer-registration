import { useState } from "react"
import styles from "../styles/volunteerRegister.module.css"
import { Navbar } from "./Navbar";
import {
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton,
  } from '@chakra-ui'

const initInfo={
    name:"",
    email:"",
    mobile:null,
    location:"",
    language:[],
    daysAvailable:[]
}


export const VolunteerRegister=()=>{
    const [volunteerData,setVolunteerData] = useState(initInfo)
    const handleLanguage=()=>{

    }
    const handleDays=()=>{

    }
    const handleSubmit=()=>{

    }
    return(<>
    <Navbar/>
    <form className={styles.form_volunteer} onSubmit={handleSubmit}>
        <div>
            {/* <p>Name:</p> */}
            <input type="text" placeholder="Enter Name" name="name" />
        </div>
        <div>
            {/* //<p>Email:</p> */}
            <input type="text" placeholder="Enter email" name="email" />
        </div>
        <div>
            {/* //<p>Mobile:</p> */}
            <input type="number" placeholder="Enter Mobile Number" name="mobile" />
        </div>
        <div>
            {/* //<p>Location:</p> */}
            <input type="text" placeholder="Enter your city" name="city" />
        </div>
        <div>
            {/* //<p>Language:</p> */}
            <input type="text" placeholder="Enter spoken language" name="language" />
            <button onClick={handleLanguage}>Add+</button>
            {volunteerData.language.map((item)=>(
                <Tag
                size="md"
                borderRadius='full'
                variant='solid'
                colorScheme='green'
              >
                <TagLabel>{item}</TagLabel>
                <TagCloseButton />
              </Tag>
            ))}
        </div>
        <div>
            {/* //<p>Days Available:</p> */}
            <input type="text" placeholder="Enter available days" name="daysAvailable" />
            <button onClick={handleDays}>Add+</button>
        </div>
        <div>
            <button className={styles.set_register_btn} type="submit">Register</button>
        </div>
    </form>
    </>)
}