## 📚 Book Store REST API

A simple RESTful API for managing a collection of books, built using **Node.js**, **Express**, and **MongoDB**.

This API allows users to create, read, update, and delete (CRUD) book records.


## 🚀 Features

- Create a new book
- View all books
- Update a book by ID
- Delete a book by ID



## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Tools**: Nodemon, dotenv, CORS, body-parser


## 📁 Folder Structure

book_backend/
│
├── models/ # Mongoose schema (Book)
│ └── book.model.js
│
├── controllers/ # Controller logic for routes
│ └── book.controller.js
│
├── routes/ # API route definitions
│ └── book.routes.js
│
├── app.js # Main application file
├── .env # Environment variables
├── package.json # Project metadata & scripts
└── README.md


## ⚙️ Setup Instructions

1. Clone the repository

git clone https://github.com/sujal2617/BookStore.git
cd book_backend


2. Install dependencies

npm install


4. Configure environment variables

Create a .env file in the root folder and add your MongoDB URI:

mongo_url=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=5000
Replace <username>, <password>, and <dbname> with your actual MongoDB Atlas credentials.

5. Start the server

npm start
Server will run at http://localhost:5001

📬 API Endpoints

GET	/api/books	Get all books
POST	/api/books	Add a new book
PUT	/api/books/:id	Update book by ID
DELETE	/api/books/:id	Delete book by ID

✅ Sample POST Request Body

{
  "title": "test",
  "author": "sujal pattewar",
  "price": 1000,
  "publishedDate": "2025-06-06"
}
🧪 Testing
Use tools like Postman or Insomnia to test the API routes.

