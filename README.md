# Todo Backend API
A simple RESTful API for managing todos using Express.js, MongoDB, and Node.js.


# Description
This project is a backend-only Todo application that allows users to create, read, update, and delete todos. 
It is built using Express.js and MongoDB (Mongoose). 
The API is tested using Postman and ready to connect with any frontend.


## Features
- Create a new todo
- Read all todos
- Update a todo
- Delete a todo
- MongoDB integration with Mongoose
- JSON based REST API


## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman (for testing)
- Nodemon (for development)


## Folder Structure
todo-backend/
├── controllers/       # API logic
│   └── todoController.js
├── models/            # Mongoose schema
│   └── Todo.js
├── routes/            # API routes
│   └── todoRoutes.js
├── server.js          # Entry point
├── package.json
└── README.md


# Start the server
npm run dev


## Server will run on
http://localhost:5000/api/todos


## API Endpoints

## Get all todos
GET /api/todos

## Create a new todo
POST /api/todos
Body (JSON):


## Update a todo
PUT /api/todos/:id


## Delete a todo
Delete /api/todos/:id


## Future Improvements
- Add user authentication (JWT)
- Add categories or priorities for todos
- Pagination for large number of todos
- Deploy API to cloud (Heroku, Railway, or Render)


