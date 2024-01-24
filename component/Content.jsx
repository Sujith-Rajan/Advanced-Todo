import styles from "../styles/content.module.css";
import { IoAddCircle } from "react-icons/io5";
import { BiSolidFileFind } from "react-icons/bi";
import { GrTask } from "react-icons/gr";
import { GrTasks } from "react-icons/gr";
import { MdIncompleteCircle } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { GiAirZigzag } from "react-icons/gi";
import {  useEffect, useState } from "react";
import TodoAdd from "./TodoAdd";
import Success from "./Success";
import AllTodo from "./AllTodo";
import { useSelector } from "react-redux";
import axios from "axios";
import ViewProjects from '../component/ViewProjects'

const Content = () => {
   
    const [todoOpen, setTodoOpen] = useState(false);
    const [getTodo, setGetTodo] = useState(false);
    const [success, setSuccess] = useState(false);
    const {count} = useSelector((state)=> state.todo)

    const[projects,setProjects] = useState([])
    const[noData,setNoData] = useState()
    const[viewProjects,setViewProjects] = useState(false)

    

    useEffect(()=>{
        const getProjects = async()=>{
            try{
                const projects = await axios.get("http://localhost:3000/api/project")
                if(!projects){
                    setNoData('No projects added')
                }
                setProjects(projects.data)
            }
            catch(err){
                console.log(err)
            }
        }
        getProjects()
    },[setProjects])

    setTimeout(() => {
        setSuccess(false);
    }, 3000);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.topRow}>
                    <div className={styles.task} onClick={() => setTodoOpen(true)}>
                        <IoAddCircle className={styles.icon} />
                        <span>Add Todo</span>
                    </div>
                    <div className={styles.task} onClick={() => setGetTodo(true)}>
                        <GrTask className={styles.icon} />
                        <span>Get All Todo</span>
                        {count ?
                        <div className={styles.allCount}>
                         <span className={styles.spanCount}>{count}</span> 
                        </div>
                       : ""} 
                    </div>
                    <div className={styles.task}>
                        <BiSolidFileFind className={styles.icon} />
                        <span>Find Todo</span>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.event} onClick={()=>setViewProjects(true)} >
                        <GrTasks className={styles.icons} />
                        <GiAirZigzag className={styles.Design} />
                        <h2 className={styles.eventTitle}>
                            <span className={styles.eventCount}>{projects.length}</span> Projects
                        </h2>
                        <p>You have total {projects.length} projects</p>
                    </div>
                    <div className={styles.event}>
                        <MdIncompleteCircle className={styles.icons} />
                        <GiAirZigzag className={styles.Design} />
                        <h2 className={styles.eventTitle}>
                            <span className={styles.eventCount}>18</span> Tasks Completed
                        </h2>
                        <p>Completed within one week</p>
                    </div>
                    <div className={styles.event}>
                        <IoIosTimer className={styles.icons} />
                        <GiAirZigzag className={styles.Design} />
                        <h2 className={styles.eventTitle}>
                            <span className={styles.eventCount}>10</span> Tasks Pending
                        </h2>
                        <p>Remain 10 tasks for still exist</p>
                    </div>
                </div>
            </div>
            {todoOpen && <TodoAdd setTodoOpen={setTodoOpen} setSuccess={setSuccess} />}
            {success && <Success />}
            {getTodo && <AllTodo setGetTodo={setGetTodo} />}
            {viewProjects && <ViewProjects setViewProjects={setViewProjects} projects={projects}/>}
        </div>
    );
};

export default Content;
