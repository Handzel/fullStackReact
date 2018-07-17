// keys.js

if (process.env.NODE_ENV === 'production') {
    // we are in production - prod keys
    module.exports = require('./prod');
} else {
    // we're in development - dev keys
    module.exports = require('./dev');
}