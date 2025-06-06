const Book = require('../models/book.model');

//get
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

//post
exports.createBook = async (req, res) => {
    const { title, author, price, publishedDate } = req.body;
    const book = new Book({ title, author, price, publishedDate });

    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
};

//put
exports.updateBook = async (req, res) => {
    const {id} = req.params;
    try {
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedBook) return res.status(404).json({
            message: 'Book not found'
        });
        res.json(updatedBook);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
};

//delet
exports.deleteBook = async (req, res) => {
    const {id} = req.params;
    try {
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) return res.status(404).json({
            message: 'Book not found'
        });
        res.json({
            message: 'Book deleted successfully'
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};
