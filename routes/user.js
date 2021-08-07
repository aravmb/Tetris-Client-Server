const path = require('path');

const express = require('express');

const router = express.Router();

const fs = require('fs');

router.post('/api/user', (req,res,next) => {
    const data = req.body;
    console.log(req.body);
    const filePath = 'scores.txt';

    fs.appendFile(filePath, JSON.stringify(data), function (err) {
        if (err) {
            console.log('Failed to store the score data', err);
        }
        console.log('Saved in file!');
    });
});

module.exports = router;