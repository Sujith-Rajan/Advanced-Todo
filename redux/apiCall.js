import { addTodo, updateTodo, deleteTodo } from "./todoSlice";
import axios from "axios";

export const createTodo = async (dispatch, todo) => {
    try {
        const res = await axios.post("http://localhost:3000/api/todos", todo);
        if (res.status === 201) {
            dispatch(addTodo(res.data));
        }
    } catch (err) {
        console.log(err);
    }
};

export const changeStatus = async (dispatch, status, id) => {};

export const deleteData = async (dispatch, id) => {
    console.log("apicall",id)
    try {
        const res = await axios.delete(`http://localhost:3000/api/todos/${id}`);
        dispatch(deleteTodo(res.data));
        console.log("apicallback",res.data)
    } catch (err) {
        console.log(err);
    }
};
