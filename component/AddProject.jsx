import { useState } from 'react'
import styles from '../styles/addProject.module.css'
import { Motion,spring } from 'react-motion'
import axios from 'axios'


const AddProject = ({setAddProject,setSuccess}) => {

const[title,setTitle] = useState(null)
const[description,setDescription] = useState(null)
const[link,setLink] = useState(null)
const[file,setFile] = useState(null)

  const handleCreateProject = async() => {
    try{
      const data = {
        title,
        desc:description,
        link,
        imageUrl:"ppp",
      }
      const createProject = await axios.post("http://localhost:3000/api/project",data)
      setAddProject(false)
      setSuccess(true)
    }
    catch(err){
      console.log(err)
    }
     
  }
  return (
    <Motion
    defaultStyle={{ opacity: 0, y: -90 }}
    style={{ opacity: spring(1), y: spring(1) }}
  >
    {(interpolatingStyle) => (
    <div 
    style={{
      opacity: interpolatingStyle.opacity,
      transform: `translateY(${interpolatingStyle.y}px)`,
    }}
    className={styles.container }>
         <div className={styles.wrapper}>
        <button className={styles.closeButton} onClick={()=>setAddProject(false)}>x</button>
        <div className={styles.input}>
            <h1>Project details</h1>
             <label htmlFor="">title</label>   
             <input type="text"
              className={styles.inputField} 
              title='project title'
              onChange={(e)=>setTitle(e.target.value)}
              />
             <label htmlFor="">description</label>
             <textarea 
             name="" id=""  rows="10" style={{background:'transparent'}}
             onChange={(e)=>setDescription(e.target.value)}
             title='project details and descriptions'
            ></textarea>
            <label htmlFor="">link</label>   
             <input type="text"
              className={styles.inputField} 
             title='project link'
              onChange={(e)=>setLink(e.target.value)}
              />
              <div>
               <label htmlFor="">upload screenshot</label>  
               <input type="file" title='upload project screenshot' onChange={(e)=>setFile(e.target.files[0])}/>
               </div>
            <div>
             <button
              className={styles.todoButton} 
              onClick={handleCreateProject}
              >
                Create new project</button>
             </div>
        </div>
        </div>
    
    </div>
     )}
     </Motion>
  )
}

export default AddProject
