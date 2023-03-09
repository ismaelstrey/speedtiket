import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FormProvider } from "./usecontext/FormContext";
import "./index.css";
import { KanbanProvider } from "./usecontext/KanbamContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <KanbanProvider>  <FormProvider><App /></FormProvider></KanbanProvider>
  
    
  </React.StrictMode>
);
