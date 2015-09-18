var runthered = require('runthered');
// the credentials for the API
var username = "testuser";
var password = "testuser";
var serviceKey = "82221";

// the options for the request
var body = "test";
var to = "6421859582";
var from = "8222";
var pushId = 231434;

var msgId = "55fb4a1ae138230a7217ab1d";

pushApi = new runthered.PushApi(username, password, serviceKey);

pushApi.pushMessage(
	{
	body: body,
	to: to,
	from: from,
	pushId: pushId
	},
	// callback function
	function(error, pushResponse) {
                if(error){
			// the JSON response is something like {"jsonrpc": "2.0", "id": 231434, "error": {"message": "Invalid shortcode.", "code": -1}}
			console.log("We failed with error " + error.error.message);
			console.log("The error code is " + error.error.code);
		}else{
			// the JSON response is something like {"jsonrpc":"2.0","id":231434,"result":{"status":"Accepted","msg_id":"55fb46b5e138230a7217aaf3"}}
			console.log("The response pushId is " + pushResponse.id);
			console.log("The response status is " + pushResponse.result.status);
			console.log("The response msgId is " + pushResponse.result.msg_id);
		}
	}
	);

pushApi.queryDlr(
	{
	msgId: msgId,
	pushId: pushId
	},
	// callback function
	function(error, dlrResponse) {
                if(error){
			// the JSON response is something like {"jsonrpc":"2.0","id":231434,"error":{"message":"Unknown Message Id.","code":-11}}
			console.log("We failed with error " + error.error.message);
			console.log("The error code is " + error.error.code);
		}else{
			// the JSON response is something like {"jsonrpc":"2.0","id":231434,"result":{"status":"ENROUTE","reason":"000","msg_id":"55fb47d4e138230a7217aaff"}}
			console.log("The status is " + dlrResponse.result.status);
			console.log("The reason is " + dlrResponse.result.reason);
			console.log("The msgId is " + dlrResponse.result.msg_id);
		}
	}
	);
