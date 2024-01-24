import axios from 'axios';
import styles from '../styles/profile.module.css'
import Image from 'next/image'
import { useState } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import Errormsg from './Errormsg';
import Success from './Success';

const Profile = ({setProfile}) => {
 const[errCmpnt,setErrCmpnt] = useState(false)
 const[errorMsg,setErrMsg] =useState()
 const[success,setSuccess] =useState(false)

  const[firstname,setFirstname] = useState(null)
  const[lastname,setLastname] = useState(null)
  const[birthday,setBirthday] = useState(null)
  const[gender,setGender] = useState(null)
  const[email,setEmail] = useState(null)
  const[phone,setPhone] = useState(null)
  const[address,setAddress] = useState(null)
  const[city,setCity] = useState(null)
  const[pin,setPin] = useState(null)
  const[file,setFile] =useState(null)
 
  const handleSave = async () => {
    try{

      const data = {
        firstname,
        lastname,
        birthday,
        gender,
        email,
        phone,
        address,
        city,
        pin,
        image:"fffff/dddf"
       }
   const createProfile = await axios.post("http://localhost:3000/api/user",data)
   setSuccess(true)

  }catch(err){
    setErrMsg(err.response.data.message)
    setErrCmpnt(true)
  }
  }
  setTimeout(()=>{
  
    setSuccess(false)
  },5000)

  return (
    <div className={styles.container }>
       <button className={styles.closeButton} onClick={()=>setProfile(false)}>x
        </button>
      <div className={styles.wrapper}>
       <div className={styles.profileLeft}>
          <h1>General information</h1>
          <div className={styles.profileDetails}>
          <div className={styles.feilds}>
          <label htmlFor="firstname">Firstname</label>
          <input type="text" 
          title='Enter your firstname'
          onChange={(e)=>setFirstname(e.target.value)}/>
          </div>
          <div className={styles.feilds}>
          <label htmlFor="lastname">Lastname</label>
          <input type="text" 
           title='Enter your lastname'
           onChange={(e)=>setLastname(e.target.value)}/>
          </div>
          <div className={styles.feilds}>
          <label htmlFor="birthday">Birthday</label>
          <input type="date" 
           onChange={(e)=> setBirthday(e.target.value)}/>
          </div>
          <div className={styles.feilds}>
          <label htmlFor="gender">Gender</label>
           <select name="gender" id=""
            onChange={(e)=>setGender(e.target.value)}>
            <option value="" >Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
           </select>
          </div>
          <div className={styles.feilds}>
          <label htmlFor="email">Email</label>
          <input type="email"
           title='eg:username@gmail.com'
           onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className={styles.feilds}>
          <label htmlFor="phone">Phone</label>
          <input type="phone"
           pattern="[0-9]+" 
           title="Only numeric values are allowed"
           onChange={(e)=>setPhone(e.target.value)}/>
          </div>
          </div>
          <h2>Address</h2>
          <address>
            <textarea name="" id="" cols="46" rows="2" 
            onChange={(e)=>setAddress(e.target.value)}>
            </textarea>
          </address>
          <div className={styles.profileDetails}>
          <div className={styles.feilds}>
            <label htmlFor="city">City</label>
            <input type="text" onChange={(e)=>setCity(e.target.value)} />
          </div>
          <div className={styles.feilds}>
            <label htmlFor="pin">Pin</label>
            <input type="text" onChange={(e)=>setPin(e.target.value)} />
          </div>
          </div>
          <button title='save all' onClick={handleSave}>Save All</button>

       </div>
       <div className={styles.profileRight}>
        <div className={styles.profileImages}>
         <Image className={styles.profileCover} src="/image/profileCover.jpg"
                 objectFit='cover' 
                width={400}
                height={200}></Image>
         <Image className={styles.profilePic} src="/image/aboutImg.jpg"
                 objectFit='contain' 
                width={150}
                height={150}></Image>
       </div>
       <div className={styles.profileDisplay}>
              <p>Admin</p>
              <p>admin@gmail.com</p>
              <p>Ernakulam,Kerala</p>
       </div>
       <div className={styles.profilePicUpload}>
          <h4>Select profile photo</h4>
          <div>
            Image
         
          <div>
          <input type="file" title='upload extension only JPG,PNG or JPEG' onChange={(e)=>setFile(e.target.files[0])}/>
          <FaCloudUploadAlt className={styles.uploadIcon} />
          <label htmlFor="upload">Choose Image</label>
          </div>
         
          </div>
       
       </div>
       </div>
      </div>
    {errCmpnt && <Errormsg errorMsg={errorMsg} setErrCmpnt={setErrCmpnt}/>}
    {success && <Success/>}
    </div>
  )
}

export default Profile
