import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './App.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const generateChartData = () => {
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = tasks.length - completedTasks;
    return {
      labels: ['Concluídas', 'Pendentes'],
      datasets: [
        {
          data: [completedTasks, pendingTasks],
          backgroundColor: ['#ae29fb', '#a9aaef'],
        },
      ],
    };
  };
  const options = {
    plugins: {
      legend: {
        labels: {
          color: '#ffffff',
        },
      },
    },
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
      <Doughnut data={generateChartData()} options={options} />
    </div>
  );
}



export default App;