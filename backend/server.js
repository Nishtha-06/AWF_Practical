require("dotenv").config();

const connectDB = require("./config/db");
const express = require("express")
const logger = require("./middleware/logger")
const taskRoutes = require("./routes/tasks");

const app = express()
connectDB();
const PORT = 3000

app.use(express.json())

//logger middleware
app.use(logger)

app.use("/tasks", taskRoutes);

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})