export default function About() {
  return (
    <section className="panel about-panel">
      <p className="eyebrow">A LITTLE ABOUT DAYLIST</p>
      <h1>Simple plans.<br /><span>Better days.</span></h1>
      <p>
        Daylist is a lightweight task planner built as a Week 3 React
        fundamentals project. It demonstrates component-based design,
        client-side routing, and React hooks.
      </p>
      <div className="feature-grid">
        <article><span>01</span><h3>React Router</h3><p>Move between Home, Tasks, and About without reloading the page.</p></article>
        <article><span>02</span><h3>useState</h3><p>Manage tasks, form values, categories, and filters.</p></article>
        <article><span>03</span><h3>useEffect</h3><p>Save tasks to local storage and update the page title when routes change.</p></article>
      </div>
    </section>
  );
}