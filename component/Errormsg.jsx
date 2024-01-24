import { useEffect } from 'react';
import styles from '../styles/errorMsg.module.css'
import { BiErrorAlt } from "react-icons/bi";

const Errormsg = ({errorMsg,setErrCmpnt}) => {
   
  return (
   
    <div  className={`${styles.container} ${styles.shake}`}>
        <label htmlFor="" onClick={()=>setErrCmpnt(false)}>X</label>
        <BiErrorAlt className={styles.icon} />
    <p className={styles.title}>{errorMsg}</p>
</div>
 
  )
}

export default Errormsg
