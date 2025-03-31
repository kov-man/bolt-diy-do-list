import { useState } from 'react';

const Home = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const addTask = () => {
    if (task) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
