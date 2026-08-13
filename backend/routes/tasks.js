const express = require("express");
const router = express.Router();

const Task = require("../models/Task");

// GET /tasks
router.get("/", async (req, res, next) => {
    try {
        const tasks = await Task.find();

        res.status(200).json(tasks);
    } catch (error) {
        next(error);
    }
});


// POST /tasks
router.post("/", async (req, res, next) => {
    try {
        const task = await Task.create(req.body);

        res.status(201).json(task);
    } catch (error) {
        next(error);
    }
});


// PUT /tasks/:id
router.put("/:id", async (req, res, next) => {
    try {
        const task = await Task.findByIdAndUpdate( //Find the task by id and update it using the data sent in the request body.
            req.params.id,
            req.body,
            {
                new: true, //return the updated document.
                runValidators: true //run Mongoose schema validations during the update.
            }
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json(task);

    } catch (error) {
        next(error);
    }
});


// DELETE /tasks/:id
router.delete("/:id", async (req, res, next) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task deleted successfully"
        });

    } catch (error) {
        next(error);
    }
});


module.exports = router;