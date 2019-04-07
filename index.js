const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3005;

app.use(express.static(path.resolve(__dirname, './public/build/')));
app.use(express.static(path.resolve(__dirname, './public/assets/')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/build/', './index.html'));
});

const server = http.createServer(app, console.log);

server.listen(PORT, () =>
    console.log(`Example app listening on port ${PORT}!`));
