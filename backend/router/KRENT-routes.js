const express = require("express");
const router = express.Router();
const Book = require("../model/KRENT-model");
const booksController = require("..//controller/rent-controller");

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;