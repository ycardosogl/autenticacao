var express = require('express');
var router = express.Router();
var users = require('../controllers/users.js');

//router.get('/', users.getUsers);
router.post('/', users.createUsuario);
router.post('/confirma', users.getonelogin);

module.exports = router;
