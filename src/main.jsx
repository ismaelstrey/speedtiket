import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FormProvider } from "./usecontext/FormContext";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormProvider><App /></FormProvider>
    
  </React.StrictMode>
);
