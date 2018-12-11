const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const squareRoutes = require('./routes/squares');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/square", squareRoutes)

app.get('/', function(req, res) {
	res.send('Hello! The API is running');
});

module.exports = app;