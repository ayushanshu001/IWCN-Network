# Note Application

## Run Locally

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
- Able to edit/update.
- Delete existing notes.

## Brief to run locally
Clone Repository
Go to the backend directory
Install node packages
Create .env file in root directory
Create Database in Mysql locally
PORT=8001 PASSWORD=<YOUR-PASSWORD> DATABASE=<YOUR-DB> in .env file
You have Mysql locally installed in your system
Lastly run server

Go to the frontend directory
Install node packages
Run on localhost PORT



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
    PORT=8001
    DATABASE=<Database name>
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
    
8. Start the server:
    ```
    npm start
    ``` 

9. Open a browser and go to http://localhost:3000


## Usage
To use the note app, follow these steps:

1. Open the app in your browser by going to http://localhost:3000
2. Enter content for the note.
3. Click on "Add Note" to create a new note.
4. To delete a note, click on the "Delete" button.


## Technologies Used
- React.js
- Node.js
- MySQL
- Express.js



    
