import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/main.scss";

//Context
import { DataProvider } from "./context/DataContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* context envolvendo o elementos que farão uso dos dados*/}
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
