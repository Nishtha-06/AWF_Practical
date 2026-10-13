// Validate request bodies before they reach route handlers.
const { body, validationResult } = require("express-validator");

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: "Validation failed",
            errors: errors.array(),
        });
    }

    next();
};

const registrationValidation = [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email")
        .trim()
        .isEmail()
        .withMessage("A valid email is required")
        .normalizeEmail(),
    body("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long"),
    validateRequest,
];

const loginValidation = [
    body("email")
        .trim()
        .isEmail()
        .withMessage("A valid email is required")
        .normalizeEmail(),
    body("password").notEmpty().withMessage("Password is required"),
    validateRequest,
];

const taskValidation = [
    body("title").trim().notEmpty().withMessage("Title is required"),
    body("description")
        .trim()
        .notEmpty()
        .withMessage("Description is required"),
    validateRequest,
];

module.exports = {
    registrationValidation,
    loginValidation,
    taskValidation,
};