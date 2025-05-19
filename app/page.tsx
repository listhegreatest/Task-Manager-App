'use client';

import { useEffect, useState } from 'react';

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  // Fetch tasks on page load
  useEffect(() => {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  // Create a new task
  const handleAddTask = async () => {
    if (!newTask.trim()) return;
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTask }),
    });

    const createdTask = await res.json();
    setTasks(prev => [...prev, createdTask]);
    setNewTask('');
  };

  async function deleteTask(id: number) {
    await fetch(`/api/tasks/${id}`, {
      method: 'DELETE',
    });
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }


  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4"> Task Manager</h1>

      <div className="mb-6">
        <input
          className="border p-2 mr-2 rounded"
          placeholder="New task"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>

      <ul>
  {tasks.map(task => (
    <li key={task.id} className="mb-2 flex justify-between items-center">
      {task.title}
      <button
        className="ml-4 text-red-600 hover:underline"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  ))}
</ul>
</main>
  );
}
