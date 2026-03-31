# 🌍 Relax Map Backend API

REST API for a travel locations platform with authentication, reviews, filtering and pagination.
Built with **Node.js, Express, MongoDB (Mongoose)**.

---

## 🚀 Live Demo

👉 https://relax-map-backend-api.onrender.com

📌 Base URL:

```
https://relax-map-backend-api.onrender.com/api
```

📖 Swagger Docs:

```
https://relax-map-backend-api.onrender.com/api-docs
```

---

## 📌 Features

* 🔐 JWT Authentication (register / login / logout / refresh)
* 🗺️ Locations CRUD (create, update, delete, get)
* ⭐ Feedback & rating system
* 👤 User profiles
* 🧭 Categories (regions & location types)
* 🔎 Filtering & search
* 📄 Pagination
* 📘 Swagger API documentation
* ⚡ RESTful architecture

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB (Mongoose)**
* **JWT (Authentication)**
* **Swagger (API Docs)**
* **Render (Deployment)**

---

## 📂 API Endpoints

### 🔐 Auth

```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
POST   /api/auth/refresh
```

### 👤 Users

```
GET    /api/users/me
GET    /api/users/:userId
GET    /api/users/:userId/locations
```

### 🗺️ Locations

```
GET    /api/locations
GET    /api/locations/:locationId
POST   /api/locations
PATCH  /api/locations/:locationId
DELETE /api/locations/:locationId
```

### ⭐ Feedbacks

```
GET    /api/feedbacks
POST   /api/feedbacks
```

### 🧭 Categories

```
GET    /api/regions
GET    /api/location-types
```

### ✍️ Authors

```
GET    /api/authors
```

---

## 📥 Example Request

### Create Location

```
POST /api/locations
```

```json
{
  "name": "Sunny Beach",
  "description": "Perfect place to relax",
  "locationType": "more",
  "region": "odeshchyna",
  "coordinates": {
    "lat": 46.48,
    "lon": 30.73
  }
}
```

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/relax-map-backend-api.git
cd relax-map-backend-api
npm install
```

---

## ▶️ Run Locally

```bash
npm run dev
```

---

## 🔐 Environment Variables

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

## 🧠 Architecture Notes

* Modular structure (routes / controllers / services)
* Validation middleware (Joi / custom schemas)
* Authentication middleware (JWT)
* Clean separation of concerns
* Scalable REST design

---

## 📄 License

MIT
