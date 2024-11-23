//imp
//clg
// rfce
//useSta

import PropTypes from "prop-types";
import { TaskCard } from "./TaskCard";
import { useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskList() {

  const { tasks } = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 className="text-black text-4xl">No hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2 pt-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  );
}

// Validación de props con PropTypes
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ), //.isRequired,
};

export default TaskList;
