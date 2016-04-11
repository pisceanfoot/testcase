var www = require('../../bin/www');
var request = require('supertest');
var should = require('should');

describe('company info', function  () {
	var url = 'http://127.0.0.1:11999';

	it('load company with page size 20 each', function(done){

		var queryData = {
			pageSize: 2,
			// status: 'A'
		};

		request(url)
			.post('/service/companyInfo/load')
			.set('Content-Type', 'application/json')
			.send(queryData)
			.end(function(err, res) {
				should.not.exist(err);
				console.log(res.body);
				console.log(res.body.result.list);
				res.body.should.have.property('isSuccess', true);
				
				done();
			});
	});

	it('audit a company', function(done){

		var queryData = {
			companyId: "2c375367-cd89-43b9-98a1-5a1d438183f5"
		};

		request(url)
			.post('/service/companyInfo/approve')
			.set('Content-Type', 'application/json')
			.send(queryData)
			.end(function(err, res) {
				should.not.exist(err);
				// console.log(res.body.result);
				console.log(res.body);
				res.body.should.have.property('isSuccess', true);
				
				done();
			});
	});
});