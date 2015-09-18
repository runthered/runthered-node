var http_gateway = require('/home/finn/workspace/wrapper_libs/runthered_node/lib/http_gateway.js');
// the credentials for the API
var username = "snoop7";
var password = "snoop7";
var serviceKey = "snop7";

// the options for the request
var message = "test";
var to = "6421859582";
var from = "2059";

var msgId = "55fb8506e138230a7217ab3e";

httpGatewayApi = new http_gateway(username, password, serviceKey);

httpGatewayApi.pushMessage(
	{
	message: message,
	to: to,
	from: from
	},
	// callback function
	function(error, message) {
                if(error){
			console.log("We failed with error " + error);
		}else{
			// the response is just the msg_id
			console.log("The push message response is " + message);
		}
	}
	);

httpGatewayApi.queryDlr(
	{
	id: msgId
	},
	// callback function
	function(error, dlrResponse) {
                if(error){
			console.log("We failed with error message " + error);
		}else{
			// the response is simple JSON with status, reason and id attributes
			console.log("The status is " + dlrResponse.status);
			console.log("The reason is " + dlrResponse.reason);
			console.log("The msgId is " + dlrResponse.id);
		}
	}
	);
