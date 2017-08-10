var httpHelper = () => {
    var rp = require('request-promise');
    var _get = options => rp(options);
    var _post = options => rp.post(options);

    return {
        get: _get, post: _post
    };
};


module.exports = httpHelper();