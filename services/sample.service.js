module.exports = http => {

    var appRoot = require('app-root-path');
    var config = require(appRoot + '/helpers/config')(require(appRoot + '/config'));

    if (!http)
        throw new Error("Http Service not provided");

    var _getSample = () => {
        var options = { uri: config.getPostsUrl(), json: true };
        return http.get(options).then(data => data.map(e => ({ userId: e.userId, id: e.id, newField: e.userId + e.id })));
    };
    return {
        getSample: _getSample
    };
};
