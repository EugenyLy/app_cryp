var User = require('./models/user');
var async = require('async');
var mongoose = require('./libs/mongoose');
5b7b40d5b0f0961ff958b33e

mongoose.connection.on('open', function () {

    var db = mongoose.connection.db;
    db.dropDatabase(function (err) {
        if (err) throw err;
        async.parallel(
            [
            function (callback) {
                var user = new User({
                    users_online: 1000,
                    user_registred: 100000,
                    user_bets: 0
                });
                user(function (err) {
                    callback(err, user);

                })
            }
        ],
            function (err, result) {
            console.log(arguments);
            mongoose.disconnect();
        });

    })
});



