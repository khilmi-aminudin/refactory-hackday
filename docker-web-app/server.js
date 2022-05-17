'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Home Route');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

app.get('/refactory', (req, res) => {
  res.send('Empowering People Through Programming');
});
    
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);