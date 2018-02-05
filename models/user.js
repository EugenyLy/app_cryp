
const mongoose = require('../libs/mongoose');
mongoose.Promise = global.Promise;
var id = mongoose.Types.ObjectId();
const userSchema = mongoose.Schema({
    users_online: Number,
    user_registred: Number,
    user_bets: Number
});

userSchema.statics.findUserByName = function (name, cb) {
    return this.findOne({_id: '5a749f902e8e9215e8575489'}, cb)
};

const User = mongoose.model('User', userSchema);

module.exports = User;