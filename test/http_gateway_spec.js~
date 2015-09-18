var expect = require("chai").expect;
var nock = require("nock");
var request = require('request');
var http_gateway = require("../lib/http_gateway.js");

describe("HttpGateway", function(){
	it("Should set the attributes correctly", function(){
		var username = 'fred';
		var password = 'bob';
		var serviceKey = 'fdf';
		httpGatewayApi = new http_gateway(username, password, serviceKey);
		expect(httpGatewayApi).to.have.a.property("username", username);
		expect(httpGatewayApi).to.have.a.property("password", password);
		expect(httpGatewayApi).to.have.a.property("serviceKey", serviceKey);
	});
	describe("#pushMessage()", function(){
		it("Send message successfully", function(done){
			var username = 'snoop7';
			var password = 'snoop7';
			var serviceKey = 'snop7';

			var message = "test";
			var to = "6421859582";
			var from = "2059";
			var msgId = "55fb6e7ce138230a7217ab33";
			var url = 'http://localhost:9999/public_api/sms/gateway/';
			var dlrUrl = 'http://localhost:9999/public_api/sms/dlr/';

			httpGatewayApi = new http_gateway(username, password, serviceKey, url, dlrUrl);
			
			nock(url).post("/" + serviceKey, {message: 'test', to: to, from: from})
				 .basicAuth({
        				user : username,
					pass: password
    					})
		        	 .reply(200, msgId);
 	

			httpGatewayApi.pushMessage(
				{
					message: message,
					to: to,
					from: from
				},
				function(error, message) {
					expect(message).to.deep.equal(msgId);
					done();

				}
			
			);
			
		});
		it("Send message failed unauthorised", function(done){
			var username = 'snoop7';
			var password = 'snoop7';
			var serviceKey = 'snop7';

			var message = "test";
			var to = "6421859582";
			var from = "2059";
			var msgId = "55fb6e7ce138230a7217ab33";
			var url = 'http://localhost:9999/public_api/sms/gateway/';
			var dlrUrl = 'http://localhost:9999/public_api/sms/dlr/';

			httpGatewayApi = new http_gateway(username, password, serviceKey, url, dlrUrl);
			
			nock(url).post("/" + serviceKey, {message: 'test', to: to, from: from})
				 .basicAuth({
        				user : username,
					pass: password
    					})
		        	 .reply(401, 'Unauthorized');
 	

			httpGatewayApi.pushMessage(
				{
					message: message,
					to: to,
					from: from
				},
				function(error, message) {
					expect(error.message).to.deep.equal("Unauthorized");
					done();

				}
			
			);
			
		});
		it("Send message failed error", function(done){
			var username = 'snoop7';
			var password = 'snoop7';
			var serviceKey = 'snop7';

			var message = "test";
			var to = "6421859582";
			var from = "2059";
			var msgId = "55fb6e7ce138230a7217ab33";
			var url = 'http://localhost:9999/public_api/sms/gateway/';
			var dlrUrl = 'http://localhost:9999/public_api/sms/dlr/';

			httpGatewayApi = new http_gateway(username, password, serviceKey, url, dlrUrl);
			
			nock(url).post("/" + serviceKey, {message: 'test', to: to, from: from})
				 .basicAuth({
        				user : username,
					pass: password
    					})
		        	 .reply(400, 'Invalid from code: unsupported code on this TNP');
 	

			httpGatewayApi.pushMessage(
				{
					message: message,
					to: to,
					from: from
				},
				function(error, message) {
					expect(error.message).to.deep.equal("Invalid from code: unsupported code on this TNP");
					done();

				}
			
			);
			
		});
	});
	describe("#queryDlr()", function(){
		it("Query Dlr successfully", function(done){
			var username = 'snoop7';
			var password = 'snoop7';
			var serviceKey = 'snop7';

			var message = "test";
			var to = "6421859582";
			var from = "2059";
			var msgId = "55fb6e7ce138230a7217ab33";
			var url = 'http://localhost:9999/public_api/sms/dlr/';
			var dlrUrl = 'http://localhost:9999/public_api/sms/dlr/';

			httpGatewayApi = new http_gateway(username, password, serviceKey, url, dlrUrl);
			
			nock(url).get("/" + serviceKey)
				 .query({id: msgId})
				 .basicAuth({
        				user : username,
					pass: password
    					})
		        	 .reply(200, {"status": "ENROUTE", "reason": "000", "id": msgId});
 	

			httpGatewayApi.queryDlr(
				{
					id: msgId
				},
				function(error, message) {
					expect(message).to.deep.equal({"status": "ENROUTE", "reason": "000", "id": msgId});
					done();

				}
			
			);
			
		});
		it("Query Dlr failed unauthorised", function(done){
			var username = 'snoop7';
			var password = 'snoop7';
			var serviceKey = 'snop7';

			var message = "test";
			var to = "6421859582";
			var from = "2059";
			var msgId = "55fb6e7ce138230a7217ab33";
			var url = 'http://localhost:9999/public_api/sms/dlr/';
			var dlrUrl = 'http://localhost:9999/public_api/sms/dlr/';

			httpGatewayApi = new http_gateway(username, password, serviceKey, url, dlrUrl);
			
			nock(url).get("/" + serviceKey)
				 .query({id: msgId})
				 .basicAuth({
        				user : username,
					pass: password
    					})
		        	 .reply(401, "Unauthorised");
 	

			httpGatewayApi.queryDlr(
				{
					id: msgId
				},
				function(error, message) {
					expect(error).to.deep.equal("Unauthorised");
					done();

				}
			
			);
			
		});
		it("Query Dlr failed error", function(done){
			var username = 'snoop7';
			var password = 'snoop7';
			var serviceKey = 'snop7';

			var message = "test";
			var to = "6421859582";
			var from = "2059";
			var msgId = "55fb6e7ce138230a7217ab33";
			var url = 'http://localhost:9999/public_api/sms/dlr/';
			var dlrUrl = 'http://localhost:9999/public_api/sms/dlr/';

			httpGatewayApi = new http_gateway(username, password, serviceKey, url, dlrUrl);
			
			nock(url).get("/" + serviceKey)
				 .query({id: msgId})
				 .basicAuth({
        				user : username,
					pass: password
    					})
		        	 .reply(404, {"message": "Unknown Message Id: Could not find message id " + msgId, "code": 404});
 	

			httpGatewayApi.queryDlr(
				{
					id: msgId
				},
				function(error, message) {
					expect(error).to.deep.equal('{"message":"Unknown Message Id: Could not find message id 55fb6e7ce138230a7217ab33","code":404}');
					done();

				}
			
			);
			
		});
	});

});


