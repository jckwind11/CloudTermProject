const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../helpers/database');
const User = db.User;
const Playlist = db.Playlist;



module.exports = {
    login,
    getByUsername,
    addUser,
    getAllPlaylists,
    addPlaylist,
}

async function login({ username, password }) {

    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id, role: user.role }, config.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}

async function getByUsername(username) {

    return await User.find({ username: username }).select('-hash');;
}

async function addUser(userParam) {

    // validate
    if (await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    } else if (await User.findOne({ email: userParam.email })) {
        throw 'Email "' + userParam.email + '" is already taken';
    }


    const user = new User(userParam);
    // hash password
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save();

    const { hash, ...userWithoutHash } = user.toObject();
    const token = jwt.sign({ sub: user.id, role: user.role }, config.secret);
    return {
        ...userWithoutHash,
        token
    };

}

async function getAllPlaylists() {
    return await Playlist.find({});
}

async function addPlaylist(playlist) {

    if (await Playlist.findOne({ playlist_id: playlist.playlist_id })) {
        throw 'Playlist already created';
    }
    let newPlaylist = playlist;
    dbPlaylist = new Playlist(newPlaylist);

    await dbPlaylist.save();
    return playlist
}