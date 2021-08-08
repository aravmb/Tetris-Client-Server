const path = require('path');

const express = require('express');

const router = express.Router();

const fs = require('fs');

router.post('/api/score', (req,res,next) => {
    const data = req.body;
    console.log(req.body);
    const filePath = 'scores.txt';
    const userName = data.userName;
    const score = data.userScore;
    const content = userName + ',' + score + ';';

    fs.appendFile(filePath, content, function (err) {
        if (err) {
            console.log('Failed to store the score data', err);
        }
    });
});

router.get('/api/score', function (req, res) {
    fs.readFile('scores.txt', 'utf8' , (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.setHeader('Content-Type', 'application/txt');
        res.send(data);
      })
  })

module.exports = router;