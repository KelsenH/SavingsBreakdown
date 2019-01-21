const express = require('express');
const app = express();
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
app.get('/getCategories', (req, res) => {
  res.send(savingCategories);
});