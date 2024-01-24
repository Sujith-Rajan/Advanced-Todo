import styles from '../../styles/signup.module.css'
import { useState } from 'react';
import { BiShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";

const signup = () => {
  const[showPassword,setShowPassword] = useState(false)
  const handleHide = ()=> {
      setShowPassword((prev) => !prev)
  }
  return (
    <div className={styles.container }>
       <div className={styles.wrapper}>
         <div className={styles.inputFields}>
            <h1 className={styles.title}>REGISTER</h1>
           
            <label htmlFor="">Fullname</label>
            <input type="text" className={styles.input} />
           
           
            <label htmlFor="">Email</label>
            <input type="email" className={styles.input} />
           
            <label htmlFor="">Password</label>
            <input type={showPassword ? "text" : "password"} className={styles.input}/>
         <div onClick={handleHide}>
            {showPassword 
            ? <BiShow className={styles.icon} />
            :<BiSolidHide className={styles.icon}/> }
           </div>
           
            <label htmlFor="">Confirm-Password</label>
            <input type="password" className={styles.input}/>
           
            
           
            <button className={styles.button}>Sign Up</button>
         </div>
       </div>
        </div>
  )
}

export default signup