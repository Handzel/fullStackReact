// CommonJS
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
// only 'require' without const declaration i.e passportConfig
// because /services/passport.js does not return anything
require('./models/User'); //this before passport to load model before passport does
require('./services/passport');

const keys = require('./config/keys');

//const authRoutes = require('./routes/auth');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

//authRoutes(app);
require('./routes/auth')(app);
require('./routes/billing')(app);

if (process.env.NODE_ENV === 'production') {
    // ORDER is relevant!
    
    // FIRST. Express will serve up prod assets
    // like our main.js file or main.css file
    app.use(express.static('client/build'));

    // IF PREVIOUS ATTEMPT FAILED. Express will serve up the index.html file
    // if route is not recognized
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5004;
app.listen(port, () => console.log(`Server started on ${port}`));