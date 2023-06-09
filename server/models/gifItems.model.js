
const moongose = require('mongoose');

const GifItemSchema = new moongose.Schema({
  item: {
    type: String,
    required: true
  },
  caption: {
    type: String
  },
  uploadedBy:{
    type: String
  },
  uploadedById: {
    type: String
  }
});

//Exportamos el Schema
module.exports = moongose.model('Gif', GifItemSchema);
