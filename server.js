const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, 'build');

const port = process.env.PORT || 3000;

