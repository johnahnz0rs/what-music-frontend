const controller = require('../controllers/controllers.js');
const router = require('express').Router();

module.exports = router
    .get('/api/login-spotify', controller.loginSpotify)
    .get('/api/callback-spotify', controller.callbackSpotify)
    .get('/api/user/:email', controller.getUserByEmail)
    .get('/api/user/all', controller.getAllUsers)
    .post('/api/user', controller.createUser)
    .delete('/api/deleteOne', controller.deleteOne)
    .get('/lolz', controller.lolz)
;

