import { createContext, useContext } from "react"
import useTodo from "./useTodo";

const todoContext = createContext();

const ContextProvider = ({children}) => {
    const data = useTodo();
    return (
        <todoContext.Provider value={data}>
            {children}
        </todoContext.Provider>
    )
}

export const useTodoContext = () => useContext(todoContext);

export default ContextProvider;