const express = require("express");
const cors = require("cors");
const res = require("express");
const { query } = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello my smart node js and my nodemon");
});

const users = [
  { id: 1, name: "sabana", email: "sabana@gmail.com", phone: "01583938729" },
  { id: 2, name: "sabnur", email: "sabnur@gmail.com", phone: "01583938729" },
  {
    id: 3,
    name: "suchorita",
    email: "suchorita@gmail.com",
    phone: "01583938729",
  },
  {
    id: 4,
    name: "suchonda",
    email: "suchonda@gmail.com",
    phone: "01583938729",
  },
  {
    id: 5,
    name: "srabonti",
    email: "srabonti@gmail.com",
    phone: "01583938729",
  },
  { id: 6, name: "sabila", email: "sabila@gmail.com", phone: "01583938729" },
  { id: 7, name: "sohana", email: "sohana@gmail.com", phone: "01583938729" },
];

app.get("/users", (req, res) => {
  // filter by search query
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((person) => person.id === id);
  res.send(user);
});
app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("listen my smart node", port);
});
