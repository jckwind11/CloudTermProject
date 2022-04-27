const userService = require('../services/user.service')


module.exports = {
    login,
    register
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