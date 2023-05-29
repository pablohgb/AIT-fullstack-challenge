const moongose = require('mongoose');

const GifItemSchema = new moongose.Schema({
  item: {
    type: String,
    required: true
  },
  caption: {
    type: String
  }
});

//Exportamos el Schema
module.exports = moongose.model('gif', GifItemSchema);
