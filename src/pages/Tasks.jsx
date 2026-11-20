import { useState } from "react";

export default function Tasks({ tasks, onAdd, onToggle, onDelete }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Personal");
  const [filter, setFilter] = useState("All");

  function handleSubmit(event) {
    event.preventDefault();
    if (!title.trim()) return;
    onAdd(title, category);
    setTitle("");
  }

  const visibleTasks = tasks.filter(task => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <section className="tasks-page">
      <div className="page-heading">
        <div><p className="eyebrow">PLAN YOUR DAY</p><h1>My tasks<span>.</span></h1></div>
        <p>{tasks.filter(t => !t.completed).length} tasks left to complete</p>
      </div>

      <form className="add-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="task-title">Task name</label>
        <input id="task-title" value={title} onChange={e => setTitle(e.target.value)}
          placeholder="What needs to get done?" />
        <label className="sr-only" htmlFor="task-category">Category</label>
        <select id="task-category" value={category} onChange={e => setCategory(e.target.value)}>
          <option>Personal</option><option>Study</option><option>Work</option>
        </select>
        <button type="submit">Add task +</button>
      </form>

      <div className="filter-row" aria-label="Filter tasks">
        {["All", "Active", "Completed"].map(item =>
          <button key={item} className={filter === item ? "filter active" : "filter"}
            onClick={() => setFilter(item)} type="button">{item}</button>
        )}
      </div>

      <div className="task-list">
        {visibleTasks.length ? visibleTasks.map(task => (
          <article className={`task-card ${task.completed ? "is-complete" : ""}`} key={task.id}>
            <button className="check-button" onClick={() => onToggle(task.id)}
              aria-label={task.completed ? "Mark task active" : "Mark task complete"}>
              {task.completed ? "✓" : ""}
            </button>
            <div className="task-text">
              <strong>{task.title}</strong><span>{task.category}</span>
            </div>
            <button className="delete-button" onClick={() => onDelete(task.id)} aria-label={`Delete ${task.title}`}>×</button>
          </article>
        )) : <div className="empty-state"><span>✦</span><h3>Nothing here yet</h3><p>Add a task or choose another filter.</p></div>}
      </div>
    </section>
  );
}