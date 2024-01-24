import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos:[],
        count:0,
        
    },
    reducers: {
        addTodo:(state,action) => {
            state.todos.push(action.payload);
            state.count += 1;
        },
        deleteTodo:(state,action) => {
            console.log("slice",action.payload._id)
            const indexToRemove = state.todos.findIndex((item) => item._id === action.payload._id);

            if (indexToRemove !== -1) {
              state.todos.splice(indexToRemove, 1);
              state.count -= 1;
            }
        },
        updateTodo:(state,action) => {
            console.log(action.payload)
            state.todos[
                state.todos.findIndex((item) => item._id === action.payload._id)
            ] = action.payload.status
        },
        resetTodo:(state) =>{
            state.todos=[];
            state.count = 0;
        }
        
    }
})

export const {
    addTodo,
    deleteTodo,
    updateTodo,
    resetTodo
} = todoSlice.actions;
export default todoSlice.reducer;