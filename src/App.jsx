import { useEffect, useState } from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Tasks from "./pages/Tasks.jsx";
import About from "./pages/About.jsx";

const STORAGE_KEY = "daylist-week3-tasks";

const starterTasks = [
  { id: 1, title: "Review React hooks", category: "Study", completed: false },
  { id: 2, title: "Finish weekly assignment", category: "Work", completed: false },
  { id: 3, title: "Organise project files", category: "Personal", completed: true }
];

export default function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : starterTasks;
    } catch {
      return starterTasks;
    }
  });
  const location = useLocation();

  // Persist task changes so the list remains available after a refresh.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Update the browser tab title whenever the route changes.
  useEffect(() => {
    const pageName = location.pathname === "/" ? "Home"
      : location.pathname.slice(1).replace(/^./, c => c.toUpperCase());
    document.title = `${pageName} | Daylist`;
  }, [location.pathname]);

  function addTask(title, category) {
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      category,
      completed: false
    };
    setTasks(current => [newTask, ...current]);
  }

  function toggleTask(id) {
    setTasks(current => current.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  function deleteTask(id) {
    setTasks(current => current.filter(task => task.id !== id));
  }

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink to="/" className="brand"><span className="brand-mark">D</span> daylist</NavLink>
        <nav aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      <main className="page-wrap">
        <Routes>
          <Route path="/" element={<Home tasks={tasks} completedCount={completedCount} />} />
          <Route path="/tasks" element={
            <Tasks tasks={tasks} onAdd={addTask} onToggle={toggleTask} onDelete={deleteTask} />
          } />
          <Route path="/about" element={<About />} />
          <Route path="*" element={
            <section className="panel">
              <p className="eyebrow">404 · Page not found</p>
              <h1>That page doesn't exist.</h1>
              <p>Use the navigation above to return to Daylist.</p>
              <NavLink className="primary-link" to="/">Back to home</NavLink>
            </section>
          } />
        </Routes>
      </main>

      <footer>Made with React hooks · Week 3 project</footer>
    </div>
  );
}