# 🏥 JYP Hospital | Patient Database

Finals Enabling Assessment 5 – Node.js + MongoDB Project  
**Course:** IT Professional Elective  
**Institution:** De La Salle University – Dasmariñas  

This project is a simple hospital patient database web application built using **Node.js**, **Express.js**, **MongoDB**, and **EJS**. The app connects to a MongoDB database and displays patient information in a styled browser interface.

---

## 📌 Features

- Display patient records in a clean and structured HTML table.
- Connects to MongoDB using Mongoose.
- Styled interface using custom CSS.
- Designed to mimic a patient listing format (similar to hospital systems).

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** (via MongoDB Compass)
- **Mongoose**
- **EJS** (Embedded JavaScript Templates)
- **HTML/CSS**

---

## 📁 Folder Structure

```
Bee_EA5/
├── node_modules/
├── public/
│   └── css/
│       └── style.css
├── views/
│   └── index.ejs
├── .gitignore
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/tawang-tawan/beedumaopmolina.git
   cd beedumaopmolina
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start MongoDB**
   - Ensure MongoDB is installed and running.
   - Create a database named `hospitalDB` and a collection named `patients`.
   - Insert the following data:

     ```json
     [
       { "patientId": "P001", "lastName": "Park", "firstName": "Jinyoung", "age": 51 },
       { "patientId": "P002", "lastName": "Im", "firstName": "Nayeon", "age": 27 },
       { "patientId": "P003", "lastName": "Yoo", "firstName": "Jeongyeon", "age": 26 },
       { "patientId": "P004", "lastName": "Hirai", "firstName": "Momo", "age": 26 },
       { "patientId": "P005", "lastName": "Minatozaki", "firstName": "Sana", "age": 26 },
       { "patientId": "P006", "lastName": "Park", "firstName": "Jihyo", "age": 26 },
       { "patientId": "P007", "lastName": "Myoui", "firstName": "Mina", "age": 26 },
       { "patientId": "P008", "lastName": "Kim", "firstName": "Dahyun", "age": 25 },
       { "patientId": "P009", "lastName": "Son", "firstName": "Chaeyoung", "age": 24 },
       { "patientId": "P010", "lastName": "Chou", "firstName": "Tzuyu", "age": 24 }
     ]
     ```

4. **Run the application**
   ```bash
   node app.js
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

---


## 👤 Author

**Joshua Jose Peter Undag Bee**  
Information Technology – Web Development  
De La Salle University – Dasmariñas  

---

## 📄 License

This project is for educational purposes only.
