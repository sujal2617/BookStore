const express = require('express');
const router = express.Router();
const bookcontroller = require('../controllers/book.controller');

router.get(
    '/books', bookcontroller.getAllBooks
);

router.post(
    '/books', bookcontroller.createBook
);

router.put(
    '/books/:id', bookcontroller.updateBook
);

router.delete(
    '/books/:id', bookcontroller.deleteBook
);

module.exports = router;
