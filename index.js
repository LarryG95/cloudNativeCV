const express = require('express');
const path = require('path');


const app = express();

app.get('*', (req, res) => {
    console.log("CV triggered...");
    res.sendFile(path.join(__dirname, './cv', 'index.html'));
});

const PORT = process.env.PORT || 8080;

console.log('Server listening on:', PORT);
app.listen(PORT);
