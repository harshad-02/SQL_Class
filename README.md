# Express MySQL CRUD Application

A simple **CRUD (Create, Read, Update, Delete)** web application built using  
**Node.js, Express, EJS, and MySQL**.

This project demonstrates:
- RESTful routing
- Server-side rendering with EJS
- Database operations using MySQL
- Method override for PATCH and DELETE requests

---

## 🚀 Features

- View all users
- Edit user username with password verification
- Delete users
- Count total users
- Clean RESTful routes
- MySQL database integration

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MySQL**
- **EJS**
- **mysql2**
- **method-override**
- **dotenv**

---

## 📂 Project Structure
```bash
SQL_Class/
│
├── views/
│   ├── home.ejs
│   ├── show.ejs
│   └── edit.ejs
│
├── index.js
├── package.json
├── .gitignore
└── README.md

```

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository


git clone https://github.com/harshad-02/SQL_Class.git
cd SQL_Class
2️⃣ Install dependencies

npm install
3️⃣ Create .env file
env
Copy code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=delta_app
⚠️ Do not commit .env to GitHub

4️⃣ Run the application

nodemon index.js
or


node index.js
🌐 Routes Overview
Method	Route	Description
GET	/	Show total user count
GET	/user	Show all users
GET	/user/:id/edit	Edit user form
PATCH	/user/:id	Update username
DELETE	/user/:id	Delete user

🧠 Learning Outcomes
Understanding Express routing

Using EJS templates

Handling forms with PATCH & DELETE

Connecting Node.js with MySQL

Protecting sensitive data using .env

🔒 Security Notes
Passwords are stored in plain text (for learning only)

Use bcrypt for hashing in production

Environment variables are used for DB credentials

📌 Future Improvements
Password hashing (bcrypt)

User creation form

Pagination

Search functionality

Authentication & authorization

UI improvements (Bootstrap / Tailwind)

👨‍💻 Author
Harshad Dudye
GitHub: harshad-02

📄 License
This project is for learning purposes only.



---

## ✅ How to add it to GitHub

1️⃣ Create file:
```bash
README.md
2️⃣ Paste content

3️⃣ Commit & push:

git add README.md
git commit -m "Add README"
git push
