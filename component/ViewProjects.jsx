import styles from '../styles/viewProjects.module.css'
import { Motion,spring } from 'react-motion'
import Image from 'next/image'
import Link from 'next/link'

const AddProject = ({setViewProjects,projects}) => {
  return (
    <Motion  defaultStyle={{ scale: 0.1}} 
    style={{ scale: spring(1)}}>
    {interpolatingStyle => (
      <div
        style={{
            transform: `scale(${interpolatingStyle.scale})`,
            transition: 'transform .1s ease-in-out',
        }}
        className={styles.container}
      >
       
        <div className={styles.wrapper}>
        <button className={styles.closeButton} onClick={()=>setViewProjects(false)}>x</button>
            <h1 className={styles.title}>Projects</h1>
            <div className={styles.cards}>
              {projects.map((project)=>(
                <div className={styles.card}>
                   <Image 
                   src='/image/aboutImg.jpg'
                    width={150} height={150}
                    className={styles.cardImage} ></Image>
                    <div>
                   <p><i>{project.title}</i></p> 
                   <p>{project.desc}</p>
                   <p>
                    <Link href={project.link}>Click here to visit the site</Link>
                    </p>
                    </div>
                    
                </div>
                ))}
            </div>
        </div>
        
    </div>
      )}
      </Motion>
  )
}

export default AddProject
      
                

