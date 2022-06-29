const router = require('express').Router();
const UserController = require('../Controllers/user');

router.post('/create-user', UserController.createUser);

module.exports = router;