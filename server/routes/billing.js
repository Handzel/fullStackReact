const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);


module.exports = app => {
    app.post('/api/stripe', async (req,res) => {
        // in order to add credits there must be user logged in
        if (!req.user) {
            return res.status(401).send( { error: 'You must be logged in'});
        }

        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '5$ for 5 credits',
            source: req.body.id
        });

        //{user} object taken from passport middleware
        req.user.credits += 5;
        const user = await req.user.save();
        res.send(user);
    });
};