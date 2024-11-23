//imp
//clg
// rfce

import { createContext, useEffect, useState } from "react";
import { tasks as data} from "../data/tasks.js";

// Crear el contexto
export const TaskContext = createContext();

// Componente proveedor del contexto
export function TaskContextProvider(props) {
  
  const [tasks, setTasks] = useState([]);

  // Crear una tarea
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description || "Sin descripción", // Por si no incluye descripción
      },
    ]);
  }

  // Eliminar una tarea
  function deleteTask(taskID) {
    setTasks(tasks.filter((task) => task.id !== taskID));
  }

  // Cargar tareas iniciales desde el archivo `tasks.js`
  useEffect(() => {
    console.log("Cargando tareas iniciales:", data);
    setTasks(data);
  }, []);

  // Proveer el contexto
  return (
    <TaskContext.Provider
      value={{
        tasks,          // Estado de las tareas
        createTask,     // Función para crear una tarea
        deleteTask,     // Función para eliminar una tarea
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

