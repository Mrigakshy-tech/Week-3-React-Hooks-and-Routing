# Week 3 – React Hooks & Routing (Daylist)

A responsive task planner built with React, Vite, and React Router.

## Assignment requirements covered

- **Three pages:** Home (`/`), Tasks (`/tasks`), and About (`/about`).
- **React Router:** `BrowserRouter`, `Routes`, `Route`, `NavLink`, and `Link` provide client-side navigation.
- **useState:** Manages task data, the task form, selected category, and task filters.
- **useEffect:** Saves task changes to `localStorage` and updates the browser document title when the route changes.
- **Responsive layout:** Works on desktop and mobile screens.

## Run locally

1. Install Node.js (LTS).
2. Open this project folder in VS Code.
3. Open the terminal in the project folder.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build check

```bash
npm run build
```

## Pages

| Route    | Purpose                                           |
| -------- | ------------------------------------------------- |
| `/`      | Welcome page and task progress summary            |
| `/tasks` | Add, filter, complete, and delete tasks           |
| `/about` | Project details and explanation of React concepts |

## Hooks used

- `useState` in `App.jsx` stores tasks; `Tasks.jsx` stores the form input, category, and filter.
- `useEffect` in `App.jsx` persists tasks to browser local storage and changes the page title when the route changes.
