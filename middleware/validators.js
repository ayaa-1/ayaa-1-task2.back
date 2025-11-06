 import  { body }  from "express-validator";

const taskValidation = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters long"),

  body("description")
    .optional()
    .isLength({ max: 200 })
    .withMessage("Description must not exceed 200 characters"),

  body("completed")
    .optional()
    .isBoolean()
    .withMessage("Completed must be true or false")
];

export default taskValidation;