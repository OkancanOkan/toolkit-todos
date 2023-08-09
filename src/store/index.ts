import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, TypedUseSelectorHook, useSelector} from "react-redux";
import todoSlice from "../features/todoSlice";

const store = configureStore({
    reducer :{
        todos : todoSlice,
    }
})

export default store;

export type RootState = ReturnType< typeof store.getState> // slice  veya state typeları otomatik olarak alınması için (reducer içindeki)
export type AppDispatch = typeof store.dispatch // useDispatch hook için gerekli

export const useAppDispatch = () => useDispatch<AppDispatch>() //  useAppDispatch i her kullandıgımızda type girmemize gerek kalmayacak
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector//  useSelector kullanırken state type sürekli yazmamıza gerek kalmaması için