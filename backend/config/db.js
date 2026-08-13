const mongoose = require("mongoose"); //Mongoose is a library that helps your
// Node.js + Express backend communicate with MongoDB.

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); //connect Mongoose to MongoDB.

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1); // 1 indicates that the program exited because of an error.
    }
};

module.exports = connectDB;