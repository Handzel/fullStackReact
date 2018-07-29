// After middleware is done, next() is called to further it to another middleware
// we call next() only if we want to go next middleware

module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ error: 'Must be logged in'});
    }
    next();  
};