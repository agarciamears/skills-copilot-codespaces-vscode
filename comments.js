//Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const comments = require('./comments.json');
const fs = require('fs');

app.use(bodyParser.json());

//Get