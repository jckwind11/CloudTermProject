const userService = require('../services/user.service')


module.exports = {
    login,
    register,
    getAllPlaylists,
    createPlaylist,
};


function login(req, res, next) {
    // console.log("Authenticate():", req.body);
    userService.login(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    userService.addUser(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({
            error: { message: 'Unknown error creating user' }
        }))
        .catch(err => next(err));
}

function getAllPlaylists(req, res, next) {
    userService.getAllPlaylists(req.user.sub)
        .then(users => res.json(users))
        .catch(err => next(err));
}

function createPlaylist(req, res, next) {
    userService.addPlaylist(req.body, req.user.sub)
        .then(playlist => playlist ? res.status(200).json({ message: 'Recorded Playlist!' }) : res.status(400).json({ message: 'Could not create playlist' }))
        .catch(err => next(err));
}