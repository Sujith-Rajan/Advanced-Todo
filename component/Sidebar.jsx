import styles from '../styles/sidebar.module.css'
import { IoSettings } from "react-icons/io5";
import { IoCalendarNumber } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { RxActivityLog } from "react-icons/rx";
import { FaTasks } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useState } from 'react';
import Profile from './Profile';
import AddProject from './AddProject';
import Success from './Success';


const Sidebar = () => {
  const[success,setSuccess] = useState(true)
  const[addProject,setAddProject] = useState(false)
  const [profile,setProfile] = useState(false)
  setTimeout(()=>{
    setSuccess(false)
  },5000)
  return (
    <div className={styles.container }>
      <div className={styles.wrapper}>
        <ul className={styles.ul}>
        <li className={styles.list}><RiLogoutCircleLine className={styles.logoutIcon} />Logout</li>
        <li className={styles.list} onClick={()=>setProfile(true)}><ImProfile/>Profile</li>
        
          <li className={styles.list}><FaTasks />New Task</li>
          <li className={styles.list}><IoCalendarNumber />Schedules</li>
          <li className={styles.list}><RxActivityLog />Activities</li>
          <li className={styles.list}><FaMessage />Messages</li>
          <li className={styles.list}><IoDocumentText />Documents</li>
          <li className={styles.list}><IoSettings/>Settings</li>
        </ul>
        <div className={styles.addProject} onClick={()=>setAddProject(true)}>
        <IoMdAddCircle className={styles.iconAddPrjct} />
            <span>Add Project</span>
        </div>
      </div>
      {profile && <Profile setProfile={setProfile}/>}
      {addProject && <AddProject setAddProject={setAddProject} setSuccess={setSuccess}/>}
      {success && <Success/>}
        </div>
  )
}

export default Sidebar
         