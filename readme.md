
# User Management REST API

## Project Description

A REST API built with Node.js and Express.js.
This project demonstrates folder-based routing,
controllers, middleware, and CRUD operations.

## Technologies Used

- Node.js
- Express.js
- JavaScript ES Modules
- Nodemon
- Postman

## Features

- Fetch all users
- Fetch a single user by ID
- Create a new user
- Update an existing user
- Delete a user
- Validate required user names
- Handle users that do not exist
- Handle invalid routes
- Separate routes and controllers

## Folder Structure

folder-routing-api/
├── controllers/
│   └── userController.js
├── routes/
│   └── userRoutes.js
├── index.js
├── package.json
└── README.md

## Installation

Install dependencies:

npm install

## Run the Project

npm run dev

Server URL:

http://localhost:3000

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/users | Get all users |
| GET | /api/users/:id | Get one user |
| POST | /api/users | Create a user |
| PUT | /api/users/:id | Update a user |
| DELETE | /api/users/:id | Delete a user |

## Create User Example

POST /api/users

Request Body:

{
  "name": "Sara"
}

## Update User Example

PUT /api/users/2

Request Body:

{
  "name": "Ahmed Khan"
}

## Error Handling

The API returns appropriate HTTP status codes
for invalid routes, missing users, and invalid data.

## Note

This project stores users in an in-memory array.
Data resets when the server restarts.
