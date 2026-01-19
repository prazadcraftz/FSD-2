# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Experiments

The `src/Experiments` folder contains several React single-page application (SPA) experiments demonstrating different React concepts and state management techniques:

### Experiment 1: Counter SPA (`Experiment1_Counter.jsx`)
A simple counter application that demonstrates:
- Basic `useState` hook usage
- Event handling with increment and decrement buttons
- Styled with glassmorphism effects (using `Experiment1_Counter.css`)

### Experiment 2: To-Do List SPA (`Experiment2_Todo.jsx`)
A to-do list application featuring:
- Dynamic list management with state
- Adding new tasks through text input
- Deleting individual tasks
- Array manipulation using filter and spread operators

### Experiment 3: Theme Toggle SPA (`Experiment3_ThemeToggle.jsx`)
A theme switcher application showcasing:
- Boolean state management for dark/light mode
- Dynamic inline styling based on state
- Conditional rendering for button text
- Full-screen theme application

### Experiment 4: Simple Form SPA (`Experiment4_Form.jsx`)
A form handling application demonstrating:
- Multiple state variables (name and email)
- Form submission handling
- Controlled components with input elements
- Conditional rendering to display submitted data

Each experiment is a standalone component that can be imported and rendered in the main `App.jsx` file. To switch between experiments, simply import and render the desired experiment component in `App.jsx`.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
