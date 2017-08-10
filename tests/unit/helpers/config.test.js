describe('Config Manager Tests', () => {
    var expect = require('chai').expect;
    var appRoot = require('app-root-path');
    var config = require(appRoot + '/helpers/config');
    var mockConfig = {
        url: {
            base: 'https://jsonplaceholder.typicode.com',
            posts: '/posts'
        }
    };

    describe(' - functions - ', () => {
        it('should return post url properly', () => {
            expect(config(mockConfig).getPostsUrl()).to.equal('https://jsonplaceholder.typicode.com/posts');
        });
    });
});