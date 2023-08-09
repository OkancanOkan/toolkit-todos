import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import uuid from "uuid"; // id için kullanılan npm paketi

export interface Todo {
    id:string,
    title: string,
    completed : boolean;
}

const initialState : Todo[]  = []

const todoSlice = createSlice({
    name : "todos",
    initialState ,
    reducers : { // action veya creatorları döndürcez (actionları döndüren)
        //state manipulasyonu için
        add :(state ,action:PayloadAction<string>) => {
            const newTodo ={id: uuid.v4(), title:action.payload,completed : false} //tüm müdahale burada
            state.push(newTodo)
        }
    }
});

export default todoSlice.reducer;
export const { add } = todoSlice.actions;