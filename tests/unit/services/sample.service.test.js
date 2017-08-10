describe('Sample Service Tests', () => {

    var expect = require('chai').expect;
    var appRoot = require('app-root-path');
    var sampleService = require(appRoot + '/services/sample.service.js');

    var mockData = [{ userId: 1, id: 1 }, { userId: 2, id: 3 }];
    var mockHttp = { get: options => new Promise(resolve => resolve(mockData)) };

    describe(' - init - ', () => {

        it('should have the service be defined', () => {
            expect(sampleService(mockHttp)).to.not.be.undefined;
        });

        it('should have the service functions be defined', () => {
            expect(sampleService(mockHttp).getSample).to.not.be.undefined;
        });

        it('should throw error if http service is not provided', () => {
            expect(() => sampleService()).to.throw();
        });
    });

    describe(' - functions - ', () => {
        it('should return decorated data properly', done => {
            sampleService(mockHttp)
                .getSample()
                .then(data => {
                    expect(data.length).to.equal(2);
                    expect(data[0].id).to.equal(mockData[0].id);
                    expect(data[0].userId).to.equal(mockData[0].userId);
                    expect(data[0].newField).to.equal(mockData[0].id + mockData[0].userId);
                    expect(data[1].id).to.equal(mockData[1].id);
                    expect(data[1].userId).to.equal(mockData[1].userId);
                    expect(data[1].newField).to.equal(mockData[1].id + mockData[1].userId);
                })
                .then(done, done);
        });
    });
    
});