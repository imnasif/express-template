module.exports = config => {
    return {
        getPostsUrl: () => config.url.base + config.url.posts,
        getLogDir: () => config.logDir
    };
};