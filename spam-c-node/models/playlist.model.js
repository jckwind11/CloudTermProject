const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    playlist_id: { type: String, required: true },
    playlist_image_url: { type: String, required: true, default: 1 },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    createdDate: { type: Date, default: Date.now }
});

schema.index({ createdDate: 1 }, { unique: true });

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Playlist', schema);

// name: string;
// description: string;
// playlist_id: string;
// playlist_image_url: string;
// // tslint:disable-next-line:variable-name
// _id: string;