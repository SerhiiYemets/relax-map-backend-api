🌍 relax-map-backend-api

REST API for a travel locations platform with authentication, reviews, filtering and pagination.
Built with Node.js, Express and MongoDB.


🚀 Live API

👉 https://relax-map-backend-api.onrender.com

📌 Features

🔐 JWT Authentication (register/login)

🗺️ Travel locations management

⭐ Reviews & ratings system

🔎 Filtering & search

📄 Pagination
⚡ RESTful API architecture

🛠️ Tech Stack
Node.js
Express.js
MongoDB (Mongoose)
JSON Web Tokens (JWT)
Render (deployment)
🌐 API Base URL

https://relax-map-backend-api.onrender.com/api

📂 API Endpoints (examples)

Auth
POST /api/auth/register
POST /api/auth/login

Locations
GET /api/locations
GET /api/locations/:id
POST /api/locations

Reviews
POST /api/reviews
GET /api/reviews/:locationId

📥 Example Request
Create Location
POST /api/locations
{
  "title": "Paris",
  "description": "City of lights",
  "rating": 5
}

⚙️ Installation

git clone https://github.com/your-username/relax-map-backend-api.git

cd relax-map-backend-api

npm install

▶️ Run locally

npm run dev

🔐 Environment Variables

Create a .env file:

PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

📄 License

MIT
