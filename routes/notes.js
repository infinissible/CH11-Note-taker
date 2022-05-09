const path = require('path');
const router = require('express').Router();
const { notes } = require('../db/db');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

router.post("/api/notes", (req, res) => {
    req.body.id = notes.length.toString();
    console.log(req.body);
    res.json(req.body);

});

module.exports = router;