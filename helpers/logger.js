var winston = require('winston'),
    appRoot = require('app-root-path'),
    config = require(appRoot + '/helpers/config')(require(appRoot + '/config')),
    path = require('path'),
    fs = require('fs');


var logger = () => {
    var logDir = config.getLogDir();
    if (!fs.existsSync(logDir))
        fs.mkdirSync(logDir);

    return new (winston.Logger)({
        transports: [
            new (winston.transports.Console)({
                colorize: true,
                handleExceptions: true,
                level: "debug"
            }),
            new (winston.transports.File)({
                filename: path.join(logDir, 'debug.log'),
                level: 'debug'
            }),
            new (winston.transports.File)({
                name: 'error-file',
                filename: path.join(logDir, 'error.log'),
                level: 'error'
            })
        ]
    });
};

module.exports = logger();