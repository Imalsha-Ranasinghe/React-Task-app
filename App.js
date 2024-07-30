import './App.css';
import Task from './Components/Task';

function App() {

const tasks = [
  {id:1, task:"Task 1"},
  {id:2, task:"Task 2"},
  {id:3, task:"Task 3"},
];

  return (
    <div className="app">
      <Task task={tasks[0].task} />
      <Task task={tasks[1].task} />
      <Task task={tasks[2].task} />
      
    </div>
  );
}

export default App;
