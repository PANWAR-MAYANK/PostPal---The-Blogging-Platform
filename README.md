# PostPal---The-Blogging-Platform

Overview
--------

Welcome to Blogging Platform! This is a simple, responsive, and user-friendly blogging platform where users can register, log in, create and publish blog posts, leave comments, and search for specific posts. The platform is built using the MERN stack (MongoDB, Express.js, React, Node.js).

Features
--------

- User Registration and Login
- Create, Read, Update, and Delete Blog Posts
- Comment on Blog Posts
- Search Functionality
- User Profiles
- Responsive Design

Table of Contents
-----------------

- Installation
- Usage
- API Endpoints
- Project Structure
- Technologies Used
- Contributing
- License

Installation
------------

Prerequisites
- Node.js
- MongoDB

Clone the Repository
- git clone https://github.com/your-username/blogging-platform.git
- cd blogging-platform

Backend Setup
1. Install dependencies:
- cd server
- npm install

2. Create a .env file in the server directory and add the following environment variables:
- MONGODB_URI=your_mongodb_uri
- JWT_SECRET=your_jwt_secret

3. Start the backend server:
- npm start

Frontend Setup
1. Install dependencies:
- cd client
- npm install

2. Start the frontend server:
- npm start

Usage
-----

1. Open your browser and navigate to http://localhost:3000.
2. Register a new user account or log in with an existing account.
3. Create, view, and manage blog posts and comments.

API Endpoints
-------------

Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Log in a user
- GET /api/auth/profile - Get the authenticated user's profile

Posts
- POST /api/posts - Create a new post (authenticated)
- GET /api/posts - Get all posts
- GET /api/posts/:id - Get a post by ID
- GET /api/posts/search?q=query - Search posts

Comments
- POST /api/comments/:postId - Add a comment to a post (authenticated)
- GET /api/comments/:postId - Get comments for a post

Project Structure
-----------------

blogging-platform/
- client/
  - public/
  - src/
    - components/
    - App.js
    - index.js
    - styles.css
- server/
  - models/
    - User.js
    - Post.js
    - Comment.js
  - routes/
    - auth.js
    - posts.js
    - comments.js
  - middleware/
    - auth.js
  - .env
  - server.js
  - package.json
- README.md
- package.json

Technologies Used
-----------------

Frontend:
- React
- HTML
- CSS

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose

Contributing
------------

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (git checkout -b feature-branch)
3. Make your changes
4. Commit your changes (git commit -m 'Add new feature')
5. Push to the branch (git push origin feature-branch)
6. Create a pull request

---------------

Thank you for using our blogging platform! If you have any questions or feedback, please feel free to open an issue or contact us.

