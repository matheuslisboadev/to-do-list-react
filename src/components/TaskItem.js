import React from 'react';

function TaskItem({ task, index, toggleTaskCompletion, removeTask }) {
  return (
    <p>
      <input class="AddTask"
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(index)}
      />
      {task.text}
      <button class="btn" onClick={() => removeTask(index)}>Remover</button>
    </p>
  );
}

export default TaskItem;
