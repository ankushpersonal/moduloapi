const moment = require('moment');

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} : ${moment().format('DD-MM-YYYY HH:MM:SS')}`);
    next();
}

module.exports = logger;
