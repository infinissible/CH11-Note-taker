const express = require('express');
// const db = require('./db/db.json');

const PORT = process.env.PORT || 3001;

const app = express();
const htmlRoutes = require('./routes/notes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));
app.use('/api', htmlRoutes);
app.use('/', htmlRoutes);

// app.get('/api/db', (req, res) => {
//     res.json(db);
// });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
}); 