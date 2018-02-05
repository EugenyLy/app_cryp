
var express = require('express');
var http = require('http');
var path = require('path');
var i18n = require("i18n-express");
var geolang=require("geolang-express");
var cookieParser = require('cookie-parser');
var config = require('./config');
var log = require('./libs/log') (module);


var session = require('express-session');
var indexRoutes = require('./routes/index');
const CronJob = require('cron').CronJob;
var app = express();

app.set('port', config.get('port'));
app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, '/templates'));
app.set('view engine', 'ejs');
app.use(cookieParser());

 app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));
 app.use(geolang({
  siteLangs: ["en","ru"],
  cookieLangName: 'ulang'
}));
app.use(i18n({
  translationsPath: path.join(__dirname, 'i18n'),
  siteLangs: ["en","ru"],
    cookieLangName: 'ulang',
    paramLangName : 'clang',
  textsVarName: 'translation'

}));
app.use(express.favicon());
if(app.get('env') == 'development') {
    app.use(express.logger('dev'));
}else {
    app.use(express.logger('default'))
}
require('./routes')(app);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.session({ secret: 'your secret here' }));
app.use(app.router);
let up = true;
let startNum = 900;
let lastSum = 1500;
let job = new CronJob({
   cronTime: '* * * * * *',
    onTick: function() {
       User.findUserByName('5a749f902e8e9215e8575489',(err, user) => {


var getRandomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
            };

             function PerformCalc() {
                 if (up == true && user.users_online <= lastSum) {
                     user.users_online += getRandomInt(-2, 4);

                     if (user.users_online == lastSum) {
                         up = false;
                     }
                 } else {
                     up = false;
                     user.users_online -= getRandomInt(-2, 4);

                     if ( user.users_online <= 900) {
                         up = true;
                     }
                 }

             }

PerformCalc();


            user.save();
       });


  },
   start: false,
   timeZone: 'Europe/Kiev'
 });
let jobBetsReg = new CronJob({
   cronTime: '*/8 * * * *',
    onTick: function() {
       User.findUserByName('5a749f902e8e9215e8575489',(err, user) => {
function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
            }
           user.user_registred += getRandomInt(3, 5);
           user.save();
       });


  },
   start: false,
   timeZone: 'Europe/Kiev'
 });
jobBetsReg.start();

let jobBetsD = new CronJob({
   cronTime: '* 59 01 * * *',
    onTick: function() {
       User.findUserByName('5a749f902e8e9215e8575489',(err, user) => {

           user.user_bets = 0;
           user.save();
       });


  },
   start: false,
   timeZone: 'Europe/Kiev'
 });
jobBetsD.start();
let jobBets = new CronJob({
   cronTime: '* * * * * *',
    onTick: function() {
       User.findUserByName('5a749f902e8e9215e8575489',(err, user) => {


var getRandomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
            };


        user.user_bets += getRandomInt(15, 21);

            user.save();
       });


  },
   start: false,
   timeZone: 'Europe/Kiev'
 });


job.start();
jobBets.start();
const User = require('./models/user');
app.get('/users', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    User.findUserByName('5a749f902e8e9215e8575489',(err, users) => {

            res.send(JSON.stringify({
                users_online: users.users_online,
                users_registered: users.user_registred,
                users_bets: users.user_bets
        }))
    });
});

// const User = require('./models/user');
// app.get('/user', function (req, res) {
//     res.setHeader('Content-Type', 'application/json');
//
//
//          User.findUserByName('5a611f52c95851186c2ff6f0',(err, user) => {
//
//             res.send(JSON.stringify({
//                 users_online: user.users_online,
//                 users_registered: user.user_registred,
//                 users_bets: user.user_bets
//         }))
//     });
//
// });


app.use(express.static(path.join(__dirname, 'public')));


app.use(function (err, req, res, next) {
    if(app.get('env') == 'development'){
        var errorHandler = express.errorHandler();
        errorHandler(err, req, res, next);
    }else {
        res.send(500);
    }

});

app.use('/', indexRoutes);
http.createServer(app).listen(app.get('port'), function(){
  log.info('Express server listening on port ' + config.get('port'));
});

