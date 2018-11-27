let mongoose = require('mongoose');


const dbase = process.env.DB_URL;

mongoose.connect(dbase, {useNewUrlParser: true});
mongoose.connection.on('connected', function() {
    console.log(`*** mongoose connected on ${dbase} ***`);
});
mongoose.connection.on('error', function(err) {
    console.log('*** mongoose connection error ***', err);
});


mongoose.Promise = global.Promise;