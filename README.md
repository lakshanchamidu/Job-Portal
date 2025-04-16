# 💼 Job Portal

A full-featured MERN stack Job Portal where users can browse and apply for jobs, while admins can manage job listings. Authentication is handled via JWT, and resumes can be uploaded with file handling via Multer.

## 🚀 Tech Stack

### Frontend (React + Vite + TailwindCSS)
- React (JSX-based UI)
- Vite (Fast bundler)
- React Router (Routing)
- Axios (HTTP requests)
- Context API / Redux (State management)
- TailwindCSS (Styling)

### Backend (Node.js + Express + MongoDB)
- Node.js & Express.js (REST API)
- MongoDB & Mongoose (Database)
- JWT (Authentication)
- Multer (Resume upload)
- Bcrypt.js (Password hashing)

---

## 📌 Features

### 1. Home Page (`/`)
- List all available jobs
- Search and filter by title, company, or location
- Click to view job details

### 2. Login Page (`/login`)
- Login for users and admins
- JWT-based authentication
- Redirect to dashboard after login

### 3. Register Page (`/register`)
- New user registration
- Stores user credentials securely

### 4. Job Details Page (`/jobs/:id`)
- View full details of a job
- "Apply Now" button to submit an application

### 5. Apply Page (`/apply/:jobId`)
- Upload resume
- Submit cover letter
- Application sent to backend

### 6. Profile Page (`/profile`)
- View applied jobs
- Check application status (Pending/Accepted/Rejected)
- Option to withdraw application

### 7. Admin Dashboard (`/dashboard`)
- View, add, edit, delete job posts
- Navigate to Edit/Add Job pages

### 8. Job Edit Page (`/dashboard/edit/:id`)
- Pre-filled form to update job details
- Save changes and update database

### 9. Add Job Page (`/dashboard/add`)
- Add new job posting
- Submit and redirect to admin dashboard

---
