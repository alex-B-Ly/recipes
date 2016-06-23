var express = require('express'),
router = express.Router(),
User = require('../models/users.js');

router.get('*', function(req, res) {
  res.sendFile(process.cwd() + '/index.html');
});

router.post('/newuser', function(req, res){
	console.log(req.body);
});

module.exports = router;