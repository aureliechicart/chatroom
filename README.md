# Chatroom :question::grey_exclamation:

## Introduction 📝

This project has been developed for learning purposes.  
Simplistic real-time chat application.  
React front-end + Node server integrating socket.io.

## Project details 🔍

## Stack :wrench:

### Backend

* NodeJS v16.14.0
* Express v4.17.3
* socket.io v4.4.1
* body-parser v1.19.2

### Frontend

* Bootstrapped with create-react-app v5.0.0
* React v17.0.2
* React DOM v17.0.2
* React Redux v7.2.6
* axios v 0.26.0
* Sass v1.49.8
* React-feather v2.0.9
* classnames v2.3.1

### Features

The server accepts three hard-coded users ([click here to access the credentials](server/server.md)).
Once the user is logged in, the message input appears. You can log in as two different users in different browser tabs and have them exchanging messages instantaneously.

## Learning goals

* installing Socket.io in a NodeJS project
* developing a frontend using React + Redux
* setting up authentication and conditional views based on authenticated state
* using websockets with socket.io
* using a Redux middleware to connect to websockets, send and receive messages

## Install :construction_worker:

Clone the repository locally.

```bash
git clone <repo_url>
```

Access the *client* folder and install the dependencies.

```bash
cd client/ && npm i
```

Once the operation is completed, access the root and install the npm packages.

```bash
cd ../ && npm i
```

### Running the app :rocket:

This is a monorepo containg both the frontend project (client folder) and the backend project (server folder).

To launch the backend server:

```bash
cd server && npm run dev
```

To launch the webpack server, open a different terminal and run the following command (make sure you are at the root of the project):

```bash
cd client && npm start 
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.
