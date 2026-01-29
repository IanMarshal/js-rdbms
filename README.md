RDBMS Application — Full-Stack Portfolio Project
🔍 Overview

This project is a full-stack Relational Database Management System (RDBMS) application built to demonstrate practical skills in modern web development, API design, and database-driven systems.

The application uses a React (Vite) frontend and a Node.js + Express backend, following a clean client–server architecture. It is designed as a foundation for building real-world, data-driven applications.

🎯 Purpose (Why this project exists)

This project was built to demonstrate:

Frontend ↔ backend integration

RESTful API communication

Clean project structure

Real-world RDBMS concepts

Production-oriented development practices

It is intentionally structured to scale into a complete CRUD system backed by a relational database.

🧱 Tech Stack
Frontend

React

Vite

JavaScript (ES6 / JSX)

HTML & CSS

Backend

Node.js

Express.js

CORS

Database (planned)

MySQL or PostgreSQL

🏗️ Architecture
React (Vite)
   ↓ HTTP (fetch)
Node.js + Express (REST API)
   ↓ SQL
Relational Database


React does not connect directly to the database.
All database interactions are handled through the backend API.

📁 Project Structure
rdbms/
├── backend/
│   ├── index.js          # Express server
│   ├── package.json
│   └── node_modules/
│
├── src/
│   ├── App.jsx           # Main React component
│   ├── main.jsx          # App entry point
│   ├── App.css
│   └── assets/
│
├── index.html
├── package.json          # Frontend config
├── vite.config.js
└── README.md

▶️ Running the Project Locally
Prerequisites

Node.js (v18+ recommended)

npm

Check:

node -v
npm -v

Start the Frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173/

Start the Backend

In a separate terminal:

cd backend
npm install
node index.js


Backend runs at:

http://localhost:5000


Test endpoint:

http://localhost:5000/api/health


Expected response:

{ "status": "Backend running" }

🔗 Frontend ↔ Backend Integration

The frontend fetches data from the backend using fetch:

fetch("http://localhost:5000/api/health")


If the UI displays “Backend running”, the integration is successful.

🚧 Planned Enhancements

Database connection (MySQL / PostgreSQL)

CRUD operations

Data models and schema design

Form handling and validation

Authentication (JWT)

Deployment (frontend + backend)

🧠 Key Skills Demonstrated

React fundamentals & hooks

Vite development workflow

Node.js & Express API design

Client–server architecture

Debugging & environment setup

Scalable project organization

💼 Portfolio Notes for Reviewers

This project prioritizes correct architecture over shortcuts

Each layer (UI, API, DB) is clearly separated

The project is designed to scale into a production system

Clean setup and debugging decisions reflect real-world workflows

📌 Status

🚧 Actively developed and expanded
📈 Built as a learning and portfolio demonstration project

If you want next, I can:

Rewrite this README to match a specific job role

Add a “What I Learned” section (very strong for portfolios)

Help you deploy it and add the live link

Help you explain this project confidently in an interview

Just tell me what you want to optimize for.
