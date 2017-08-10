module.exports = (req, res, next) => {
    var logger = require(require('app-root-path') + '/helpers/logger');
    logger.info("%s: %s ", req.method, req.originalUrl);
    next();
};