<p align="center">
  <img src="https://user-images.githubusercontent.com/123456789/secure-auth-icon.png" alt="Authentication Icon" width="200">
</p>

# Complete Authentication System with React and SuperTokens

This project is a complete authentication system built using **React** on the client side and **SuperTokens** for secure and scalable authentication. It includes features such as user registration, login, session management, and more.

## Features
- **Secure Authentication**: Powered by SuperTokens for robust session management and security.
- **React Frontend**: A modern and responsive UI built with React.
- **Scalable Backend**: Easily extendable backend for handling authentication logic.
- **Session Management**: Automatic session handling with refresh tokens.
- **Customizable**: Easily integrate additional features like social login or multi-factor authentication.

---

## Demo

<img src="./client/public/imgs/1.png" width=300> <img src="./client/public/imgs/2.png" width=300>

## Project Structure

### Client
The client-side application is built with React and Vite. It handles user interactions and communicates with the backend for authentication.

- **Path**: [`client`](./client)
- **Tech Stack**: React, Vite, TailwindCSS
- **Setup**:
  ```bash
  cd client
  npm install
  npm run dev

### Server
The server-side application is built with Node.js and Express. It manages authentication logic, session handling
and communicates with the SuperTokens service.
- **Path**: [`server`](./server)
- **Tech Stack**: Node.js, Express, SuperTokens
- **Setup**:
  ```bash
  cd server
  npm install
  npm start
  ``` 
- **Environment Variables**: Ensure to set up the necessary environment variables for SuperTokens and database connections.
- **Database**: The server uses a database to store user information and session data. Configure your database connection in the `.env` file.
- **API Endpoints**: The server exposes RESTful API endpoints for user registration, login, and session management.
- **Testing**: Use tools like Postman or cURL to test the API endpoints.
- **Deployment**: The server can be deployed on platforms like Heroku, AWS, or any other Node.js hosting service.
- **Environment Variables**: Ensure to set up the necessary environment variables for SuperTokens and database connections.


## Technologies Client Side 🔧

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?logo=reacthookform&logoColor=fff)]
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)]
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)]
![Tanstack Router](https://img.shields.io/badge/tanstack-FF4154?logo=tanstack&logoColor=white)


## Technologies Server Side 🔧
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![SuperTokens](https://img.shields.io/badge/SuperTokens-00A3FF?style=for-the-badge&logo=supertokens&logoColor=white)