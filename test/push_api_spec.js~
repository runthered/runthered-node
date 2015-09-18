var expect = require("chai").expect;
var nock = require("nock");
var request = require('request');
var push_api = require("../lib/push_api.js");

describe("PushApi", function(){
	it("Should set the attributes correctly", function(){
		var username = 'fred';
		var password = 'bob';
		var serviceKey = 'fdf';
		pushApi = new push_api(username, password, serviceKey);
		expect(pushApi).to.have.a.property("username", username);
		expect(pushApi).to.have.a.property("password", password);
		expect(pushApi).to.have.a.property("serviceKey", serviceKey);
	});
	describe("#pushMessage()", function(){
		it("Send message successfully", function(done){
			var username = "snoop7";
			var password = "snoop7";
			var serviceKey = "snop7";

			var body = "test";
			var to = "6421859582";
			var from = "2059";
			var msgId = "55fb6e7ce138230a7217ab33";
			var url = 'http://localhost:10080/public_api/service';
			var pushId = 2;

			var jsonData = {"jsonrpc":"2.0", "method":"sendsms", "params":{"service_key":serviceKey, "to":to, "body":body, "frm":from}, "id":pushId}

			pushApi = new push_api(username, password, serviceKey, url);
			
			nock(url).post('', jsonData)
				 .basicAuth({
        				user : username,
					pass: password
    					})
		        	 .reply(200, {"jsonrpc":"2.0","id":pushId,"result":{"status":"Accepted","msg_id":msgId}});
 	

			pushApi.pushMessage(
				{
					body: body,
					to: to,
					from: from,
					pushId: pushId
				},
				function(error, message) {
					expect(message).to.deep.equal({"jsonrpc":"2.0","id":pushId,"result":{"status":"Accepted","msg_id":msgId}});
					done();

				}
			
			);
			
		});
		it("Send message failed unauthorised", function(done){
			var username = "snoop7";
			var password = "snoop7";
			var serviceKey = "snop7";

			var body = "test";
			var to = "6421859582";
			var from = "2059";
			var msgId = "55fb6e7ce138230a7217ab33";
			var url = 'http://localhost:10080/public_api/service';
			var pushId = 2;

			var jsonData = {"jsonrpc":"2.0", "method":"sendsms", "params":{"service_key":serviceKey, "to":to, "body":body, "frm":from}, "id":pushId}

			pushApi = new push_api(username, password, serviceKey, url);
			
			nock(url).post("", jsonData)
				 .basicAuth({
        				user : username,
					pass: password
    					})
		        	 .reply(401, 'Unauthorized');
 	

			pushApi.pushMessage(
				{
					body: body,
					to: to,
					from: from,
					pushId: pushId
				},
				function(error, message) {
					expect(error).to.deep.equal("Unauthorized");
					done();

				}
			
			);
			
		});
		it("Send message failed error", function(done){
			var username = "snoop7";
			var password = "snoop7";
			var serviceKey = "snop7";

			var body = "test";
			var to = "6421859582";
			var from = "2059";
			var msgId = "55fb6e7ce138230a7217ab33";
			var url = 'http://localhost:10080/public_api/service';
			var pushId = 2;

			var jsonData = {"jsonrpc":"2.0", "method":"sendsms", "params":{"service_key":serviceKey, "to":to, "body":body, "frm":from}, "id":pushId}

			pushApi = new push_api(username, password, serviceKey, url);
			
			nock(url).post("", jsonData)
				 .basicAuth({
        				user : username,
					pass: password
    					})
		        	 .reply(200, {"jsonrpc": "2.0", "id": pushId, "error": {"message": "Invalid shortcode.", "code": -1}});
 	

			pushApi.pushMessage(
				{
					body: body,
					to: to,
					from: from,
					pushId: pushId
				},
				function(error, message) {
					expect(error).to.deep.equal({"jsonrpc": "2.0", "id": pushId, "error": {"message": "Invalid shortcode.", "code": -1}});
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
			var url = 'http://localhost:10080/public_api/service';

			var jsonData = {"jsonrpc":"2.0","method":"querydlr","params":{"service_key":serviceKey},"id":1}

			pushApi = new push_api(username, password, serviceKey, url);
			
			nock(url).post("", jsonData)
				 .basicAuth({
        				user : username,
					pass: password
    					})
		        	 .reply(200, {"jsonrpc":"2.0","id":231434,"result":{"status":"ENROUTE","reason":"000","msg_id":msgId}});
 	

			pushApi.queryDlr(
				{
					id: msgId
				},
				function(error, message) {
					expect(message).to.deep.equal({"jsonrpc":"2.0","id":231434,"result":{"status":"ENROUTE","reason":"000","msg_id":msgId}});
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
			var url = 'http://localhost:10080/public_api/service';

			var jsonData = {"jsonrpc":"2.0","method":"querydlr","params":{"service_key":serviceKey},"id":1}

			pushApi = new push_api(username, password, serviceKey, url);
			
			nock(url).post("", jsonData)
				 .basicAuth({
        				user : username,
					pass: password
    					})
		        	 .reply(401, "Unauthorised");
 	

			pushApi.queryDlr(
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
			var url = 'http://localhost:10080/public_api/service';

			var jsonData = {"jsonrpc":"2.0","method":"querydlr","params":{"service_key":serviceKey},"id":1}

			pushApi = new push_api(username, password, serviceKey, url);
			
			nock(url).post("", jsonData)
				 .basicAuth({
        				user : username,
					pass: password
    					})
		        	 .reply(200, {"jsonrpc":"2.0","id":1,"error":{"message":"Unknown Message Id.","code":-11}});
 	

			pushApi.queryDlr(
				{
					id: msgId
				},
				function(error, message) {
					expect(error).to.deep.equal({"jsonrpc":"2.0","id":1,"error":{"message":"Unknown Message Id.","code":-11}});
					done();

				}
			
			);
			
		});
	});

});


