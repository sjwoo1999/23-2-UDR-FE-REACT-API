const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

let id = 2;
const todoList = [
  {
    id: 1,
    text: "할일 1",
    done: false,
  },
];

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/todo", (req, res) => {
  res.json(todoList);
});

app.post("/api/todo", (req, res) => {
  const { text, done } = req.body;
  todoList.push({
    id: id++,
    text,
    done,
  });
  return res.send("success");
});

app.listen(8080, () => {
  console.log("server started!");
});
