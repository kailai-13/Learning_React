import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState(['hi', 'bye', 'hello']);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (!newTask) return;
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleUpTask = (index) => {
    if (index > 0) {
      const newTasks = [...tasks];
      [newTasks[index], newTasks[index - 1]] = [newTasks[index - 1], newTasks[index]];
      setTasks(newTasks);
    }
  };

  const handleDownTask = (index) => {
    if (index < tasks.length - 1) {
      const newTasks = [...tasks];
      [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
      setTasks(newTasks);
    }
  };
  return (
    <div className="card">
      <h1 className="to">Todo List</h1>
      <input
        type="text"
        placeholder="Enter the task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="add" onClick={handleAddTask}>Add Task</button>
      <ol>
        {tasks.map((task, index) => 
          <li key={index} className="li">
            <span>{task}</span>
            <button className='del' onClick={() => handleDeleteTask(index)}>
                delete
            </button>
            <button className='down' onClick={() => handleDownTask(index)}>
                down
            </button>
            <button className='up' onClick={() => handleUpTask(index)}>
                up
            </button>
          </li>
        )}
      </ol>
    </div>
  );
}

export default Todo;