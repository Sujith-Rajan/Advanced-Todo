import React from 'react';
import { useState } from 'react';
import styles from '../styles/todoApp.module.css'
import { createTodo } from '../redux/apiCall.js';
import { useDispatch } from 'react-redux';
import {Motion,spring} from 'react-motion'

const TodoAdd = ({setTodoOpen,setSuccess}) => {
    const dispatch = useDispatch()
    const[title,setTitle] = useState(null)
    const[subject,setSubject] = useState(null)
    const status = "Pending"
    const handleCreate = () => {
      createTodo(dispatch,{title,subject,status})
      setTodoOpen(false)
      setSuccess(true)
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
        <button className={styles.closeButton} onClick={()=>setTodoOpen(false)}>x</button>
        <div className={styles.input}>
            <h1>Create new todo</h1>
             <label htmlFor="">Title</label>   
             <input type="text"
              className={styles.inputField} 
              placeholder='Title of the To-Do List'
              onChange={(e)=>setTitle(e.target.value)}
              />
             <label htmlFor="">Todo</label>
             <textarea 
             name="" id=""  rows="10" style={{background:'transparent'}}
             onChange={(e)=>setSubject(e.target.value)}
            ></textarea>
            <div>
             <button className={styles.todoButton} onClick={handleCreate}>Add new todo</button>
             </div>
        </div>
        </div>
    </div>
      )}
      </Motion>
  )
}

export default TodoAdd