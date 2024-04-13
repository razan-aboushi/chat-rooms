# Chat with Next.js 13, Express, and MongoDB

Welcome to Simple Chat! This app uses Next.js 13 for the website, Express for the server, and MongoDB for saving chats. Follow these steps to begin.

## Features
- **User Registration and Authentication:** Securely register and authenticate users.
- **Real-time Messaging:** Engage in real-time text-based conversations using websockets.
- **Real-time Phone Calls and Video Chats:** Connect with others through voice and video calls.

## Installation

### Clone the Repository
1. Open your terminal and run the following command to clone the repository:

    ```bash
    git clone https://github.com/razan-aboushi/chat-rooms.git
    ```

### Install Dependencies
2. Navigate to the project directory and install the required dependencies for both frontend and backend:

    ```bash
    cd chat-rooms
    npm install
    ```

### Configure Environment Variables
3. Locate the `.env.example` file in the root directory, rename it to `.env`, and update the configuration values to match your environment.

### Start Development Server
4. Start the development servers by running the following commands:

    ```bash
    npm run dev  # For frontend
    nodemon index.ts  # For backend
    ```

## Usage

1. Open your preferred web browser and navigate to the application's URL.
2. Register for a new account or log in to an existing one.
3. Begin sending and receiving messages with other users.
4. Explore and utilize the various features and functionalities available in the Telegram Clone.

## Tech Stack

### Frontend
- **Next.js 13:** A React framework for building efficient and scalable web applications.
- **Zustand:** A small, fast, and scalable state management library.
- **TypeScript:** A statically typed superset of JavaScript that enhances code quality and developer productivity.
- **Tailwind.css:** A utility-first CSS framework for designing custom user interfaces.
- **auto-animate:** A library for creating smooth animations in web applications.

### Backend
- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express:** A fast, unopinionated, and minimalist web framework for Node.js.
- **Socket.io:** A library for real-time web applications using websockets.
- **JWT (JSON Web Tokens):** A compact, URL-safe means of representing claims to be transferred between two parties.
- **MongoDB:** A NoSQL database for storing and managing application data.

