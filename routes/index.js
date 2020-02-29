var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.status(200).send("<html> \
  <head> \
  <title>Ruay Agent</title> \
  </head> \
  <body style=background-color: black; text-align: center; color: white;> \
  <p>click here!!!</p>\
  </body> \
  </html>");
});

module.exports = router;
