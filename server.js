const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDB =  require('./config/dbConnection');
const dotenv = require("dotenv").config();

connectDB();
const app = express();

const port = process.env.PORT || 5000;

// Use middleware to parse incoming JSON requests and make the data available in req.body
app.use(express.json());

//use is a middlewear
app.use('/api/contacts', require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
