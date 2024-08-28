import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  return (
    <div className="App">
      <h1 class="title">TO DO LIST</h1>
      <input
        class="NewTask"
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button class="btn" onClick={addTask}>Adicionar</button>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;