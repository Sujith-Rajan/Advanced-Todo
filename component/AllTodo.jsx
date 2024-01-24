import { useEffect, useState } from "react";
import styles from "../styles/allTodo.module.css";
import DeleteWarnig from "./DeleteWarnig";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteData } from "../redux/apiCall";
import { Motion, spring } from "react-motion";
import { FaEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";

const AllTodo = ({ setGetTodo }) => {
    const dispatch = useDispatch();
    const [deleteMsg, setDeleteMsg] = useState(false);
    const [deleteConfirmId, setDeleteConfirmId] = useState();
    const [value, setValue] = useState()
    const [isTitleEditting, setIsTitleEditting] = useState(false);
    const [isSubjEditting, setIsSubjEditting] = useState(false);
    const [Index, setIndex] = useState();
   
    const { todos } = useSelector((state) => state.todo);
    const getTodos = todos;
    const id = deleteConfirmId;
   

    const handleTitleEdit = (index) => {
        setValue(getTodos[index]?.title);
        setIsTitleEditting(true);
        setIndex(index);
    };
    const handleSubjEdit = (index) => {
        setValue(getTodos[index]?.subject);
        setIsSubjEditting(true);
        setIndex(index);
    };
    const handleInputChange = (e) => {
        setValue(e.target.value);
    };
    const handleChange = async (status, id) => {
        try {
            const res = await axios.put(`http://localhost:3000/api/todos/${id}`, { status });
            dispatch(updateTodo(res.data));
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    const handleDelete = () => {
        deleteData(dispatch, id);
    };






    return (
        <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(1) }}>
            {(interpolatingStyle) => (
                <div
                    style={{
                        opacity: interpolatingStyle.opacity,
                        transition: "opacity 0.09s ease-in-out",
                    }}
                    className={styles.container}
                >
                    <button className={styles.closeButton} onClick={() => setGetTodo(false)}>
                        x
                    </button>
                    {getTodos.length !== 0 ? (
                        <div className={styles.wrapper}>
                            <h1 className={styles.title}>View All To-Dos</h1>

                            <table className={styles.table}>
                                <tbody>
                                    <tr>
                                        <th>Sl</th>
                                        <th>Title</th>
                                        <th>Todo</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    {getTodos.map((todo, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <span className={styles.editIcons}>
                                                    {isTitleEditting && Index === index ? (
                                                        <>
                                                            <input type="text" value={value} onChange={handleInputChange} />
                                                            <FaRegSave className={styles.editIcon} title="save"/>
                                                            
                                                            <MdCancel
                                                                className={styles.editIcon}
                                                                onClick={() => setIsTitleEditting(false)}
                                                            title="cancel"/>
                                                           
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span>{todo?.title}</span>
                                                            <FaEdit
                                                                className={styles.editIcon}
                                                                onClick={() => handleTitleEdit(index)}
                                                            title="edit title"/>
                                                        </>
                                                    )}
                                                </span>
                                            </td>
                                            <td>
                                                <span className={styles.editIcons}>
                                                    {isSubjEditting && Index === index ? (
                                                        <>
                                                            <input type="text" value={value} onChange={handleInputChange} />
                                                            <FaRegSave className={styles.editIcon} title="save"/>
                                                          
                                                            <MdCancel
                                                                className={styles.editIcon}
                                                                onClick={() => setIsSubjEditting(false)}
                                                            title="cancel"/>
                                                           
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span>{todo?.subject}</span>
                                                            <FaEdit
                                                                className={styles.editIcon}
                                                                onClick={() => handleSubjEdit(index)}
                                                            title="edit todo"/>
                                                           
                                                        </>
                                                    )}
                                                </span>
                                            </td>

                                            <td>
                                                <select
                                                    name=""
                                                    id=""
                                                    onChange={(e) => handleChange(e.target.value, todo?._id)}
                                                >
                                                    <option value={todo?.status === "Complete" ? "Complete" : "Pending"}>
                                                        {todo?.status === "Complete" ? "Complete" : "Pending"}
                                                    </option>
                                                    <option value={todo?.status === "Complete" ? "Pending" : "Complete"}>
                                                        {todo?.status === "Complete" ? "Pending" : "Complete"}
                                                    </option>
                                                </select>
                                            </td>
                                            <td>
                                                <button
                                                    className={styles.button}
                                                    onClick={() => {
                                                        setDeleteMsg(true);
                                                        setDeleteConfirmId(todo._id);
                                                    }}
                                                title="delete todo">
                                                    Delete
                                                </button>
                                               
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className={styles.noTodo}>No todos available. Please add some todos.</div>
                    )}
                    {deleteMsg && <DeleteWarnig setDeleteMsg={setDeleteMsg} handleDelete={handleDelete} />}
                </div>
            )}
        </Motion>
    );
};

export default AllTodo;
