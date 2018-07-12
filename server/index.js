// CommonJs
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'Hello'});
});

app.listen(5004);