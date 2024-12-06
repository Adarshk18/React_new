import { createContext,useContext } from "react";

export const ToDoContext = createContext({})

export const useToDo = () =>{
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider