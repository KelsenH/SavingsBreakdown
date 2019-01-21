const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

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
  res.send(savingCategories);
});

app.post('/categories', (req,res) => {
  let newCategory = req.body;
  savingCategories = [...savingCategories, newCategory];
  res.json({
    status: "Success"
  });
  console.log("New goal added to categories");
  console.log(savingCategories);
});
