//imp
//clg
// rfce
//useSta

import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const [title, setTexto] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(title); // Muestra el texto ingresado en la consola
    console.log(title, description); // Muestra el texto ingresado en la consola

    createTask({
      title,
      description,
    });

    setTexto(""); // Limpia el campo después de enviar la tarea
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
      <h1 className="text-2xl text-white mb-3">Crea tu Tarea</h1>
      <input
        placeholder="Escriba tu tarea"
        value={title} // Asegura que el estado y el input estén sincronizados
        onChange={(e) => setTexto(e.target.value)}
        autoFocus
        className="bg-slate-300 p-3 w-full mb-2"
      />
      <textarea
        placeholder="Escriba tu description"
        value={description} // Asegura que el estado y el input estén sincronizados
        onChange={(e) => setDescription(e.target.value)}
        className="bg-slate-300 p-3 w-full mb-2"
      />
      <button className="bg-green-500 px-2 py-1 rounded-md mt-4 hover:bg-green-200 text-white hover:text-black" type="submit">Guardar</button>
    </form>
  );
}
