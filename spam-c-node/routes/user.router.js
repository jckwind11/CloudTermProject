var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');


router.post('/login', userController.login);
router.post('/register', userController.register);
router.post('/addplaylist', userController.createPlaylist);
router.get('/getplaylists', userController.getAllPlaylists);

module.exports = router;