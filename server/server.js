// Require modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const morgan = require("morgan");

// Listing different variables
const app = express();

const port = process.env.SERVER_PORT || 3001;

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())
app.use(morgan('dev'));


app.listen(port, () => {
    console.log("Server listening on Port,", port);
})

