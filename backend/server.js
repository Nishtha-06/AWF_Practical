require("dotenv").config();

const connectDB = require("./config/db");
const express = require("express")
const cors = require("cors") 
const logger = require("./middleware/logger")
const errorHandler = require("./middleware/errorHandler")
const taskRoutes = require("./routes/tasks");
const authRoutes = require("./routes/auth");

const app = express()
connectDB();
const PORT = 3000

// Allow React frontend to communicate with Express
app.use(express.json())

// pr 6 
app.use(cors())// Enable CORS and connect the React frontend to the Express backend.

//logger middleware
app.use(logger)

app.use("/", authRoutes);
app.use("/tasks", taskRoutes);
app.use(errorHandler);

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})