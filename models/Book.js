const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title required"],
  },
  author: {
    type: String,
    required: [true, "Author required"],
  },
  isbn: {
    type: String,
    unique: true,
  },
  publishedDate: {
    type: Date,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('Book', bookSchema);
