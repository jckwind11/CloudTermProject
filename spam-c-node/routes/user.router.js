var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');


router.post('/login', userController.login);
router.post('/register', userController.register);
// router.post('/setgoals', userController.setGoals)
// router.get('/allusers', authorize(Role.admin), userController.getAllUsers);
// router.get('/getgoals/:username', userController.getGoals)

module.exports = router;