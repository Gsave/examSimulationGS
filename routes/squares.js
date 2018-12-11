const express = require('express');
const square = require('../models/square');

const squaresRoutes = express.Router(); 

squaresRoutes.route('/')
.get(function (req, res) {
    var result = square.string_square(req.query.string)
    res.status(200)
    res.json({result:result})
})

module.exports = squaresRoutes;