const express = require("express")
const app = express()
const todoRoutes = require("./routes/todo.routes")
const {connectionToMongodb} = require("../crudtdd/mongodb/mongodb.connect");

app.use(express.json())
app.use((err, req, res, next) => {
  // show the real error in test output
  console.error("ERROR:", err);
  res.status(err.status || 500).json({ message: err.message || "Server error" });
});
connectionToMongodb()
app.use("/todos",  todoRoutes)





module.exports = app;