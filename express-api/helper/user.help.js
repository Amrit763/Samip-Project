const bcrypt = require('bcrypt');
const config = require('./../config/index');

module.exports = (req, user) => {
    if (req.name)
        user.name = req.name;
    if (req.username)
        user.username = req.username;
    if (req.password)
        user.password = bcrypt.hashSync(req.password, config.saltRounds);
    if (req.email)
        user.email = req.email;
    if (req.phoneNumber)
        user.phoneNumber = req.phoneNumber;
    if (req.role)
        user.role = req.role;
    if (req.subject)
        user.subject = req.subject;
    if (req.message)
        user.message = req.message;
    return user;
}