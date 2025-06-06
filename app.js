const express = require('express');
const dotenv = require('dotenv');
const dbconnect = require('./config/db');
const bookroutes = require('./routes/book.routes');

dotenv.config();
dbconnect();

const app = express();
app.use(express.json());

app.use('/api', bookroutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(`runing on port ${PORT}`));
