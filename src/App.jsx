//imp
//clg
// rfce
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";

function App() {
  return (
    <main className="px-2 m-3">
      <TaskForm className="max-w-md mx-auto "/>
      <hr />
      <TaskList/>
    </main>
  );
}

export default App;
