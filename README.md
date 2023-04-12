# Note Application

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Technologies Used](#technologies-used)


## Introduction
This is a simple web-based application that allows users to create, read and delete notes. The frontend is built with React, while the backend is built with Node.js and uses a MySQL database to store the notes.

## Features
- Create notes with content.
- View a list of all notes.
- Delete existing notes.

## Getting Started
To get started with this project, you'll need to have Node.js and MySQL installed on your machine. You can install Node.js and MySQL.

1. Clone the repository:
    ```
    git clone https://github.com/ayushanshu001/IWCN-Network.git
    ```
    
2. Install the dependencies for backend:
    ```
    cd Note-App
    cd backend
    npm install
    
    ```
    
3.  Create a `.env` file in the root directory of the project and add your MySQL connection details:
    ```
    PASSWORD=<Your MySql DB password>
    PORT=8005
    ```    
    
5.  Start the server:
    ```
    npx nodemon index.js
    ``` 
    
6.  Install the dependencies for frontend
     ```
    cd Note-App
    cd frontend
    npm i
    
    ```
    
7. Start the server:
    ```
    npm start
    ``` 
    
    
