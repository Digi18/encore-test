const express = require('express');
const router = express.Router();
const {loginUser} = require('../controllers/loginUser.controller');
const {registerUser} = require('../controllers/registerUser.controller');
const {fetchUsers} = require('../controllers/fetchUsers.controller');
const auth = require('../middlewares/auth');
const role = require('../helpers/role');

router.post('/login',loginUser);

router.post('/users',auth([role.Admin]),registerUser);

router.get('/users',auth([role.Admin,role.User]),fetchUsers);

module.exports = router;