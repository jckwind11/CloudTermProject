const expressJwt = require('express-jwt');
const userService = require('../services/user.service');
const config = require('../config.json');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return new expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/',
            '/user/register',
            '/user/login'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getByUsername(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};