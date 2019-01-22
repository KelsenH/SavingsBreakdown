const express = require('express');
const mysql = require('mysql');
const http = require('http');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'savings_breakdown'
});

dbConnection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database");
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

let savingCategories = [
  {
    id: 1,
    name: "New house",
    currentAmount: 1000,
    goal: 50000
  }
];

// create a GET route
app.get('/categories', (req, res) => {
  dbConnection.query("SELECT * FROM categories", (err,result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post('/categories', (req,res) => {
  let newCategory = req.body;
  newCategory.goal = newCategory.goal.replace(/[^\d]/g,"");
  let insertCategorySql = "INSERT INTO categories (name, currentAmount, goal) VALUES (" + "'" + newCategory.name + "'" + ", " + 0 + ", " + newCategory.goal + ")";
  dbConnection.query(insertCategorySql, (err, result) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

app.put('/categories', (req,res) => {
  
});

app.delete('/categories', (req,res) => {
  
});
