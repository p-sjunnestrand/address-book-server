var express = require('express');
var router = express.Router();

const fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile("addresses.json", (err, data) => {
    if (err){
      console.log(err);
    }

    const addresses = JSON.parse(data);
    res.send(addresses)
  })
});

module.exports = router;
