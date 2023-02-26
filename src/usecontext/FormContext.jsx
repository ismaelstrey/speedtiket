import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({children}) => {
   
    const [mostrarFormTiket, setMostrarFormTiket] = useState(false)
    const [mostrarFormEmpresa, setMostrarFormEmpresa] = useState(false)

 
    const mostrarFormularioTiket = () => {setMostrarFormTiket(!mostrarFormTiket) || setMostrarFormEmpresa(false)}
    const mostrarFormularioEmpresa = () => {setMostrarFormEmpresa(!mostrarFormEmpresa) || setMostrarFormTiket(false)}
    return (
        <FormContext.Provider value={{mostrarFormTiket,mostrarFormularioTiket,mostrarFormEmpresa,mostrarFormularioEmpresa}}>
            {children}
        </FormContext.Provider>
    )
}