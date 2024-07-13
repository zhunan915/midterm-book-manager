
# Simple Book Manager

This is a simple online book management project built using Express and Node.js for the backend, React for the frontend, and MySQL for the database.
## Table of Contents

- [Screenshots](#Screenshots)
- [Features](#Features)
- [Setup Instructions](#Setup-Instructions)


<a id="Screenshots"></a>
## Screenshots

![Home](https://github.com/RadithSandeepa/simple-book-manager/blob/main/photos/home.png)

![Add](https://github.com/RadithSandeepa/simple-book-manager/blob/main/photos/add.png)

![Update](https://github.com/RadithSandeepa/simple-book-manager/blob/main/photos/edit.png)

<a id="Features"></a>
## Features

- CRUD operations for managing books: add, update, delete, and view.
- User-friendly interface for easy book management.
- Responsive design for desktop and mobile devices.
  
<a id="Setup-Instructions"></a>
## Setup Instructions

  1.Clone the repository:

```bash
 git clone https://github.com/RadithSandeepa/simple-book-manager.git
```


 2.Navigate to the project directory:
 ```bash
  cd simple-book-manager
```

 3.Install dependencies:
 ```bash
  cd backend
  npm install
```
```bash
 cd frontend
 npm install
```
 4.Set up MySQL database:
 - Create a MySQL database for the project.
 - Copy the .env.example file and rename it to .env.
 - Open the .env file and fill in the necessary data:
```bash
  DB_HOST=your_mysql_host
  DB_USER=your_mysql_username
  DB_PASSWORD=your_mysql_password
  DB_DATABASE=your_database_name
```
Replace your_mysql_host, your_mysql_username, your_mysql_password, and your_database_name with your MySQL database connection details.

 5.Import the provided SQL file (book_manager.sql) into your MySQL database to create the necessary tables and data.

 6.Start the server:
 ```bash
  npm start
```
7.Open your preferred web browser and navigate to http://localhost:3000 to access the Simple Book Manager.






