const mongoose = require("mongoose");

const GifItemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
  },
});

module.exports = mongoose.model("gif", GifItemSchema);
