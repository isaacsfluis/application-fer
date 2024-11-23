//imp
//clg
// rfce

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { TaskContextProvider } from "./context/TaskContext.jsx";
import "./index.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </StrictMode>
);
