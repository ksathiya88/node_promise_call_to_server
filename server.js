require("rootpath")();
const express = require("express");

const app = express();
app.use(express.static("myApp"));

const employees = [
  {
    key: 1,
    name: "ABC",
    date_of_birth: "10/10/2010",
    position_held: "Manager",
  },
  {
    key: 2,
    name: "John",
    date_of_birth: "10/10/2010",
    position_held: "Manager",
  },
  {
    key: 3,
    name: "Michael",
    date_of_birth: "10/10/2010",
    position_held: "Manager",
  },
  {
    key: 4,
    name: "Michael",
    date_of_birth: "10/10/2010",
    position_held: "Manager",
  },
  {
    key: 5,
    name: "Michael",
    date_of_birth: "10/10/2010",
    position_held: "Manager",
  },
  {
    key: 6,
    name: "Michael",
    date_of_birth: "10/10/2010",
    position_held: "Manager",
  },
];

app.get("/getEmployees", function (req, res) {
  console.log("req", req);
  console.log("employees", employees);
  res.send(employees);
});

app.listen(8081);
console.log("App listening on port 8081");
