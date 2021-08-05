const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/tetris', (req, res,next) => {
    res.sendFile(path.join(__dirname,'../','views','tetris.html'));
});

module.exports = router;