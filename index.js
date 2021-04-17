const express = require("express");
const app = express();

const port = 3000;

app.get("/", (request, response) => {
  response.send("Welcome to Express");
});

app.get("/users/:name", (request, response) => {
  response.send(`Welcome ${request.params.name}`);
});

const fruits = ["Apple", "Banana", "Kiwi"];

app.get("/fruits", (request, response) => {
  if (fruits.includes(request.query.name)) {
    response.send(`Here is your ${request.query.name}`);
  } else {
    response.send(`Sorry, ${request.query.name} not found...`);
  }
});

const cocktails = [
  {
    id: 0,
    name: "Margarita",
  },
  {
    id: 1,
    name: "Mojito",
  },
  {
    id: 2,
    name: "Cuba Libre",
  },
];

app.get("/cocktails", (request, response) => {
  response.status(200).json(cocktails);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
