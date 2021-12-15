const express = require('express');
const path = require('path');
const app = express();

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../index.html'));
})
app.get('/js', (req, res) => {
	res.sendFile(path.join(__dirname, '../main.js'))
})
app.get('/css', (req, res) => {
	res.sendFile(path.join(__dirname, '../styles.css'))
})
const port = process.env.PORT || 4030;
app.listen(port, () => { console.log(`Working on PORT ${port}`) });
