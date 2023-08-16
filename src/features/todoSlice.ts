import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid"; // id için kullanılan npm paketi

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // action veya creatorları döndürcez (actionları döndüren)
    //state manipulasyonu için
    add: (state, action: PayloadAction<string>) => {
      const newTodo = { id: v4(), title: action.payload, completed: false }; //tüm müdahale burada
      state.push(newTodo);
    },
    remove: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export default todoSlice.reducer;
export const { add, remove, toggleCompleted } = todoSlice.actions;
