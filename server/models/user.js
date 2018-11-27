const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    fname: {type: String, trim: true},
    lname: {type: String, trim: true},
    email: {type: String, trim: true},
    spotify: {
        favArtists: {type: Array},
        favGenres: {type: Array},
        user: {
            id: {type: String, trim: true},
            birthdate: {type: String, trim: true},
            country: {type: String, trim: true},
            display_name: {type: String, trim: true},
            email: {type: String, trim: true},
            external_urls: {type: Object},
            followers: {type: Object},
            href: {type: String, trim: true},
            images: {type: Array},
            product: {type: String, trim: true},
            uri: {type: String, trim: true},
        },


    },
    youtube: {
        id: {type: String, trim: true}
    },
    apple: {
        id: {type: String, trim: true}
    }
}, {timestamps: true});

mongoose.model('User', userSchema);
const User = mongoose.model('User');

module.exports = User;