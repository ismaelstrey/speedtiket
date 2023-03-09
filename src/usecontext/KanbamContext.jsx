import { createContext, useState } from "react";
import { loadTiket } from "../api/Api";

export const KanbanContext = createContext();

export const KanbanProvider = ({children}) => {
   
    const [tiket, setTiket] = useState([]);
    const [tiketAtendendo, setTiketAtendendo] = useState([]);
    const [tiketAFazer, setTiketAFazer] = useState([]);
    const [tiketPausados, setTiketPausados] = useState([]);
    const [tiketRetornados, setTiketRetornado] = useState([]);
    const [tiketExpirados, setTiketExpirados] = useState([]);

 
    const loadDataKanbanApi = async () => await setTiket(loadTiket)
    const mostrarKanbanularioEmpresa = () => {}
    return (
        <KanbanContext.Provider value={{tiket,loadDataKanbanApi}}>
            {children}
        </KanbanContext.Provider>
    )
}