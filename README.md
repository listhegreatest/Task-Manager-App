## RoomEase – Roommate Management App

## Project Overview

RoomEase is a full-stack web application designed to simplify household management between roommates. Users can log in, create and manage chores, expenses, and bills, and track completed tasks in real time. The goal is to create a shared space where transparency and collaboration thrive in a shared-living environment.

This project was created as a final assignment for the Immersive Engineering Lab, showcasing complete systems architecture and integration of core components of a modern web app.

---

 ## Live Demo

 [Live Site on Vercel] https://task-manager-fsfnm64yf-lispena444-gmailcoms-projects.vercel.app

---

## Technologies Used

### Frontend:
- React (with Next.js)
- Tailwind CSS
- Axios

### Backend:
- Next.js API routes
- Prisma ORM
- PostgreSQL (via Neon)
- Zod (validation)

### Other Tools & APIs:
- Vercel (deployment)
- Git & GitHub (version control)
- OpenAI API (chore suggestion tool) – _optional bonus feature_

---

## Features

### Frontend (1 Point)
- Built with **React (Next.js)**.
- Responsive design using **Tailwind CSS**.
- Client-side interactivity:
  - Dynamic routing
  - Chore form submissions
  - State-based task completion toggling

### Backend (1 Point)
- Next.js API routes.
- Handles routing, validation with Zod, and database interaction via Prisma.
- Exposes **at least two API endpoints**:
  - `POST /api/chores`
  - `GET /api/chores`
  - `DELETE /api/chores/:id`

### Database Integration (1 Point)
- Connected to **PostgreSQL** via **Neon**.
- Implements full **CRUD operations**:
  - Create new chores
  - Read all chores
  - Update task completion status
  - Delete completed tasks

### API Integration (1 Point)
- **Axios** used on the frontend to send HTTP requests to backend API routes.
- Includes client-side and server-side **error handling** and loading states.

### Deployment (1 Point)
- Deployed on **Vercel**.
- Publicly accessible.
- Live URL linked above and in this README.

### Git & Version Control (1 Point)
- More than 10 meaningful commits made throughout the project.
- Clear, descriptive commit messages (e.g., `Added delete chore API route`, `Connected Neon DB to Prisma`).
- GitHub repository includes:
  - This complete README
  - `.env.example` file
  - Setup instructions
  - Deployment link
  - Reflection section below

### Bonus: Creativity & Technical Ingenuity (+1 Point)
- Integrated with **OpenAI's GPT API** to provide smart chore suggestions (_optional toggleable feature_).
- Elegant and responsive UI/UX design using **Tailwind**.
- Clear component separation and state management.

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/listhegreatest/Task-Manager-App
cd roomease
