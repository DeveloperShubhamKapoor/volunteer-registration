import { Link } from "react-router-dom"
import styles from "../styles/navbar.module.css"

export const Navbar=()=>{
    return(
        <div className={styles.navbar_container}>
            <div>
                <h4 className={styles.set_heading_view}>TEACH<span style={{color:"#0ec0e2"}}>FOR</span>INDIA</h4>
            </div>
            <div className={styles.pages_div}>
                <Link className={styles.set_page_view} to="/register">Volunteer Register</Link>
                <Link className={styles.set_page_view} to="/login">Admin Login</Link>
            </div>
        </div>
    )
}