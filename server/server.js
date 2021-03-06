// Require modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const morgan = require("morgan");
const generatePins = require('./utility/generatePins')
// Listing different variables
const app = express();

const port = process.env.SERVER_PORT || 3001;

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())
app.use(morgan('dev'));

app.get('/pins', async (req, res) => {
  try {
    let result  = await generatePins();
    res.send(result);
  } catch(error) {
    res.status(400).send(new Error("Server Cannot resolve the prob"))
  }
  
})

app.listen(port, () => {
    console.log("Server listening on Port,", port);
})

