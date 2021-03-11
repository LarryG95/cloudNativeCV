const express = require('express');
const path = require('path');


const app = express();

// Static Middleware
app.use(express.static(path.join(__dirname, 'cv')));

app.set('cv', path.join(__dirname, 'cv'));
app.set('cv engine', 'ejs');

app.get('*', (req, res) => {
    console.log("CV triggered...");
    res.render(path.join(__dirname, './cv', 'index.html'));
});

const PORT = process.env.PORT || 5000;

console.log('Server listening on:', PORT);
app.listen(PORT);
