const mongoose = require('mongoose');

//const Schema = mongoose.Schema;
// destructured version below
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: {
        default: 0,
        type: Number
    }
}); 

//module.exports = User = mongoose.model('users', userSchema);
mongoose.model('users', userSchema);