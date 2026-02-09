# Teams-UI (Frontend) 🏒

A high-performance Single Page Application (SPA) built with the modern Vue ecosystem.

## ⚡️ Tech Stack

* **Framework:** [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
* **Build Tool:** [Vite](https://vitejs.dev/) (Hot Module Replacement)
* **Language:** TypeScript (Strict typing)
* **HTTP Client:** Axios
* **Styling:** Scoped CSS

## 🔌 Architecture & Integration

This UI consumes the **Teams Service** backend.

* **API Endpoint:** Expects REST API at `http://localhost:3000/api/teams`.
* **Entry Point:** Main logic and state management are currently centralized in `src/App.vue`.
* **Data Flow:** Unidirectional data flow from Parent (`App.vue`) to Child Components.
