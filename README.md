

🛍️ Naksh Jewels – Mini E-Commerce Module

<img width="1856" height="836" alt="image" src="https://github.com/user-attachments/assets/bc5c22d2-35d4-4150-a768-0f41dd5ed93f" />


A mini e-commerce application built using React.js (Frontend) and Node.js + Express (Backend) as part of the Naksh Jewels ReactJS & Node.js Internship Assessment.
The project demonstrates clean code structure, API integration, state management, and basic DevOps using Docker.

"C:\Users\rahul\Videos\Screen Recordings\Screen Recording 2026-02-08 160921.mp4"

📌 Features
Frontend (React)

Product listing page

Product card with:

<img width="1894" height="675" alt="image" src="https://github.com/user-attachments/assets/40752aac-ff49-4ce5-995d-299220df6680" />

<img width="1832" height="517" alt="image" src="https://github.com/user-attachments/assets/bdd89673-25d3-4665-aaf5-74f1b372ed7d" />

Image (Unsplash CDN)

Name

Price

Add to Cart button

Cart management using Context API

Responsive UI (mobile & desktop)

Functional components only

Backend (Node.js + Express)

GET /products – fetch product list

POST /cart – add items to cart

Validation middleware

Centralized error handling

Environment variables using .env

DevOps

Dockerfile for frontend

Dockerfile for backend

docker-compose.yml for running full app

Production-ready deployment approach

🛠️ Tech Stack

Frontend

React.js

Context API

CSS (No UI libraries)

Backend

Node.js

Express.js

MongoDB (or in-memory data)

DevOps

Docker

Docker Compose

Hosting

Frontend: Vercel

Backend: Vercel / Render (API-based)

📁 Project Structure


nakas_jewels/
│
├── frontend/
│   │
│   ├── node_modules/
│   │
│   ├── public/
│   │   └── vite.svg
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │   └── (optional local images if needed)
│   │   │
│   │   ├── components/
│   │   │   ├── CartItem.jsx
│   │   │   ├── CartItem.module.css
│   │   │   ├── Header.jsx
│   │   │   ├── Header.module.css
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductCard.module.css
│   │   │
│   │   ├── context/
│   │   │   └── CartContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Cart.jsx
│   │   │   └── ProductListing.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── .gitignore
│   ├── Dockerfile
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── README.md


cd frontend
npm install
npm run dev


🌐 Deployment
Frontend (Vercel)

Deployed using Vercel

Uses Unsplash CDN for images

Fully responsive and production-ready

Backend (Vercel Serverless)

Express API deployed using Vercel serverless functions

No local file uploads (CDN-based image handling)

🖼️ Image Handling

Images are served using Unsplash CDN

No backend file uploads

Image optimization via query parameters:
