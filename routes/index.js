var express = require('express');
var router = express.Router();
router.get('/', async (req, res) => {
  return res.render('index', {})
})

module.exports = router;