const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});

app.get('/new-endpoint', (req, res) => {
    res.send('This is a new endpoint!');
});
