# Teams-UI (Frontend) 🏒

A high-performance Single Page Application (SPA) built with the modern Vue ecosystem, tailored for the **Blue & Orange Army (Eastern Europe)**.

## ⚡️ Tech Stack

* **Framework:** [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Routing:** [Vue Router 4](https://router.vuejs.org/)
* **Language:** TypeScript (Strict typing)
* **Styling:** Custom Scoped CSS & Glassmorphism

## 🎨 Key Features

* **Glassmorphism UI:** Semi-transparent layers with `backdrop-filter: blur` for a premium "ice" look.
* **Smart Navigation:** Conditional rendering that toggles the UI based on the active route (hiding menus on the Landing page).
* **Smooth Transitions:** Integrated `<transition>` effects for fluid page switching.
* **Interactive Entry:** A custom Welcome screen featuring a high-impact, animated image-based CTA.



## 🔌 Architecture & Routing

This UI consumes the **Teams Service** backend via a modular route-based structure.

* **API Endpoint:** Expects REST API at `http://localhost:3000/api/teams`.
* **Main Routes:**
    * `/` : **WelcomeView** — Immersive entry point.
    * `/matches` : **HomeView** — Real-time NHL matches dashboard.
    * `/about` : **AboutView** — Regional info and project details.
* **Data Flow:** Unidirectional data flow from Router views to child components.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
