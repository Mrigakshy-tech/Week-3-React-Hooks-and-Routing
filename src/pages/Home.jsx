import { Link } from "react-router-dom";

export default function Home({ tasks, completedCount }) {
  const pending = tasks.length - completedCount;

  return (
    <section className="hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">YOUR SIMPLE DAILY PLANNER</p>
        <h1>Make room for<br /><span>what matters.</span></h1>
        <p className="hero-description">
          Keep your day clear and focused. Add tasks, track your progress,
          and build momentum one small step at a time.
        </p>
        <Link to="/tasks" className="primary-link">Open my tasks <span>→</span></Link>
      </div>
      <div className="summary-card">
        <div className="summary-top">
          <div>
            <p className="eyebrow">YOUR PROGRESS</p>
            <h2>Today at a glance</h2>
          </div>
          <span className="sun-icon">✦</span>
        </div>
        <div className="stats">
          <div><strong>{tasks.length}</strong><span>Total tasks</span></div>
          <div><strong>{pending}</strong><span>To do</span></div>
          <div><strong>{completedCount}</strong><span>Completed</span></div>
        </div>
        <div className="progress-track"><span style={{ width: `${tasks.length ? completedCount / tasks.length * 100 : 0}%` }} /></div>
        <p className="progress-caption">
          {tasks.length ? `${Math.round(completedCount / tasks.length * 100)}% of your tasks completed` : "Add a task to get started"}
        </p>
        <div className="note">“Small steps every day add up to big results.”</div>
      </div>
    </section>
  );
}