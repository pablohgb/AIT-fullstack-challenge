const express = require('express');
const moongose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5500;

app.use(cors());

const GifItemRoute = require('./controllers/gif.controller');
const UserRoute = require('./controllers/user.controller');
moongose
  .connect(process.env.DB_URI)
  .then(() => console.log('Database Connected'))
  .catch((err) => console.log(err));

app.use('/', GifItemRoute);
app.use('/', UserRoute);
app.listen(PORT, () => console.log('Server Connected'));
