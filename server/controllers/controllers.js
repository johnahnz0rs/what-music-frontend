let mongoose = require('mongoose');
let User = mongoose.model('User');
let request = require('request');
let querystring = require('querystring');
let dotenv = require('dotenv');
dotenv.config();

let redirect_uri = process.env.REDIRECT_URI;


module.exports = {

    //
    // LOGIN TO MUSIC SERVICES
    //

    // @ROUTE /login/spotify
    // @DESC login to spotify OAuth v2
    loginSpotify: function(req, res) {
        console.log('*** controller.loginSpotify() ***', req.body);
        res.redirect(
            'https://accounts.spotify.com/authorize?' +
            querystring.stringify({
                response_type: 'code',
                client_id: process.env.CLIENT_ID,
                scope: 'user-read-private user-read-email user-top-read user-follow-read user-library-read playlist-read-private playlist-read-collaborative user-read-recently-played',
                redirect_uri
            })
        );
    },

    // @ROUTE /callback-spotify
    // @DESC spotify's callback url
    callbackSpotify: function(req, res) {
        console.log('*** controller.callbackSpotify() ***', req.body);
        let code = req.query.code || null;
        let authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri,
                grant_type: 'authorization_code'
            },
            headers: {
                Authorization:
                    'Basic ' +
                    new Buffer(
                        process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET
                    ).toString('base64')
            },
            json: true
        };
        request.post(authOptions, function(error, response, body) {
            let access_token = body.access_token;
            let uri = process.env.FRONTEND_URI + '/user';
            res.redirect(uri + '?access_token=' + access_token);
        });
    },


//
// CREATE
//

    // @ROUTE /user
    // @DESC creates a new User object in dbase
    // currently, it looks like
    createUser: function(req, res) {
        // console.log('*** controller createUser ***', req.body);
        console.log('*** controller.createUser() ***', req.body.favArtistsByGlobalPopularity);
        console.log(req.body.email);
        console.log(req.body.user);
        User.findOne({email: req.body.email}, function(err, user) {
            if (err) {
                // console.log('*** error in user.findOne ***', err);
                res.json(err);
            } else if (user) {
                // if user exists, then create update doc and update user;
                let userData = {};
                for (let i of Object.keys(req.body)) {
                    userData[i] = req.body[i];
                    // console.log(i, ":", userData[i]);
                    console.log(i);
                }
                // console.log('*** userData to update dbase ***', userData);

                // User.findOneAndUpdate({email: req.body.email}, { $set: userData}, { returnNewDocument: true }, function(err, doc) {
                //     if (err) {
                //         console.log('*** error in User.findOne... ***', err);
                //         res.json(err);
                //     }
                //     console.log('*** User.findOneAndUpdate() finished ***');
                //     res.json();
                // });
                // console.log('*** this is User.create req.body.email ***', req.body.email);
                User.updateOne({email: req.body.email}, {favArtistsByGlobalPopularity: userData.favArtistsByGlobalPopularity}, {upsert: true}, function(err, count, lol) {
                    if (err) {
                        console.log('*** error in User.findOneAndUpdate ***', err);
                        res.json(err);
                    }
                    user.save();
                    // console.log('*** no errors in User.findOneAndUpdate() ***');
                    // console.log(count);
                    // console.log(lol);
                    res.json();
                });
            } else if (!user) {
                // if no user exists, then create user;
                User.create(req.body, function(err) {
                    if (err) {
                        // console.log('*** error in User.create ***', err);
                        res.json(err);
                    }
                    // console.log('*** User.create finished ***');
                    res.json('{result: "success"}');
                });
            }
        });
    },


//
// READ
//

    // @ROUTE /lolz
    // @DESC returns a json msg, to test comms b/w front & backend servers
    lolz: (req, res) => {
        console.log('*** controllers.lolz() ***', req);
        res.json({'msg': 'lol johnahnz0rs is l33t'});
    },


    // @ROUTE /user/all
    // @DESC returns all whatMusic users from dbase
    getAllUsers: function(req, res) {
        console.log('*** controller.getAllUsers() ***');
        User.find({}, function(err, users) {
            if (err) {
                console.log('*** error in getAllUsers.user.find() ***', err);
                res.json(err);
            } else if (users) {
                console.log('*** getAllUsers found allUsers, sending response ***', users);
                res.json(users);
            }
        })
    },

    // @ROUTE /user/:email
    // @DESC returns one user, by email, from dbase
    getUserByEmail: function(req, res) {
        console.log('*** controller.getUserByEmail & request ***', req.body, req.params.email);
        User.findOne({email: req.params.email}, function(err, user) {
            if (err) {
                console.log('*** err in user.findOne() ***');
                res.json(err);
            } else if (!user) {
                console.log('*** no such user ***');
                res.json();
            } else if (user) {
                console.log('*** found a user with that email ***', user);
                res.json(user);
            }
        });
    },


//
// UPDATE
//


//
// DELETE
//







    deleteOne: function(req, res) {
        User.findOneAndDelete({email: req.body.email}, function(err) {
            if (err) {
                console.log('*** deleteOne error ***', err);
                res.json(err);
            }
            res.json();
        });
    }

};