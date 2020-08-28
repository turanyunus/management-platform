require('dotenv').config()

const express = require('express');
const app = express();
const morgan = require('morgan')


// ADD LOG
app.use(morgan("dev"))

// ADD CORS
const cors = require('cors');
app.use(cors());

// ENV
const port = process.env.PORT || 5001
app.listen(port, () => {
    console.log('server is up and listening')
})