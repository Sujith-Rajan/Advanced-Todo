import { useState } from 'react';
import styles from '../../styles/login.module.css'
import { BiShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const login = () => {
    const[showPassword,setShowPassword] = useState(false)
    const handleHide = ()=> {
        setShowPassword((prev) => !prev)
    }
  return (
    <div className={styles.container }>
        <FaUserCircle  className={styles.userAvatar}/>
    <div className={styles.wrapper}>
  
      <div className={styles.inputFields}>
         <h1 className={styles.title}>LOGIN</h1>
        
       
        
         <label htmlFor="">Email</label>
         <input type="email" className={styles.input} />
        
         
         <label htmlFor="">Password</label>
         <input type={showPassword ? "text" : "password"} className={styles.input}/>
         <div onClick={handleHide}>
            {showPassword 
            ? <BiShow className={styles.icon} />
            :<BiSolidHide className={styles.icon}/> }
                    
         
         </div>
        
         
        
         <button className={styles.button}>Sign In</button>
      </div>
    </div>
     </div>
  )
}

export default login