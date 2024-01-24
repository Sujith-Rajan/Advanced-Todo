import React from 'react'
import styles from '../styles/fetured.module.css'
import Sidebar from './Sidebar'
import Content from './Content'
const Featured = () => {
  return (
    <div className={styles.container}>
      
      <Sidebar/>
      <Content/>
    </div>
  )
}

export default Featured