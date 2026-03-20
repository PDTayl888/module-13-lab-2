const connectDB = require('./db/connection');

const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
connectDB();


const bookRoutes = require('./routes/bookRoutes');

app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
    console.log(`SERVER RUNNING AT PORT ${PORT}`);
});