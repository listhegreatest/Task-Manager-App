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

  // EDITING STATES
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingTitle, setEditingTitle] = useState('');

  useEffect(() => {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

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

  // Start editing a task
  const startEditing = (task: Task) => {
    setEditingTaskId(task.id);
    setEditingTitle(task.title);
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingTaskId(null);
    setEditingTitle('');
  };

  // Save edited task
  const saveEdit = async (id: number) => {
    if (!editingTitle.trim()) return;
    const res = await fetch(`/api/tasks/${id}`, {
      method: 'PUT',  // your API method
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: editingTitle }),
    });

    if (res.ok) {
      const updatedTask = await res.json();
      setTasks(prev =>
        prev.map(task => (task.id === id ? updatedTask : task))
      );
      cancelEditing();
    } else {
      alert('Failed to update task');
    }
  };

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
            {editingTaskId === task.id ? (
              <>
                <input
                  className="border p-1 mr-2 rounded flex-grow"
                  value={editingTitle}
                  onChange={e => setEditingTitle(e.target.value)}
                />
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => saveEdit(task.id)}
                >
                  Save
                </button>
                <button
                  className="bg-gray-400 text-white px-2 py-1 rounded"
                  onClick={cancelEditing}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span>{task.title}</span>
                <div>
                  <button
                    className="text-blue-600 hover:underline mr-4"
                    onClick={() => startEditing(task)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
