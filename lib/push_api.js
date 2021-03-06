var request = require('request');

function PushApi(username, password, serviceKey, url){
	this.username = username;
	this.password = password;
	this.serviceKey = serviceKey;
	this.url = url || 'https://connect.runthered.com:10443/public_api/service';
}

/**
Make a POST request using JSON content to Run The Red's Push API to push a message. It uses Basic Auth, and the request library.
@param {object} options - options for HTTP request
@param {function} callback - callback function for when request is complete
@returns {object} The JSON response
*/
PushApi.prototype.pushMessage = function(options, callback) {
	var body = options.body;
	var to = options.to;
	var fromNumber = options.from;
	var pushId = options.pushId || 1;

	var jsonData = {"jsonrpc":"2.0", "method":"sendsms", "params":{"service_key":this.serviceKey, "to":to, "body":body}, "id":pushId}
	if (typeof fromNumber !== "undefined"){
		jsonData.params.frm = fromNumber;
	}	
	// Basic Auth
	auth = "Basic " + new Buffer(this.username + ":" + this.password).toString("base64");
	request.post(
	    this.url,
	    {
        	headers : {
        	        "Authorization" : auth
	        },
            json: jsonData
    	},function (error, response, body) {
		// Because this is a JSON-RPC API, even errors return a 200 http status code
		if (!error && response.statusCode == 200) {
		    if(body.error){
			// error case, the error is just the body in this case
			callback(body, body);
		    }else{
			// no error, pass back a null error
			callback(null, body);
		    }
	        }else if(error){
		    callback(error, body);
		}else{
        	    callback(body, body)
	        }
    	}
	);
	
};

/**
Make a POST request using JSON content to Run The Red's Push API to query a delivery receipt using the message's message id. It uses Basic Auth, and the request library.
@param {object} options - options for HTTP request
@param {function} callback - callback function for when request is complete
@returns {object} The JSON response
*/
PushApi.prototype.queryDlr = function(options, callback) {
	var msgId = options.msgId;
	var pushId = options.pushId || 1;

	var jsonData = {"jsonrpc":"2.0", "method":"querydlr", "params":{"service_key":this.serviceKey, "msg_id": msgId}, "id":pushId}
	// Basic Auth
	auth = "Basic " + new Buffer(this.username + ":" + this.password).toString("base64");
	request.post(
	    this.url,
	    {
        	headers : {
        	        "Authorization" : auth
	        },
            json: jsonData
    	},function (error, response, body) {
		// Because this is a JSON-RPC API, even errors return a 200 http status code
	        if (!error && response.statusCode == 200) {
		    if(body.error){
			// error case, the error is just the body in this case
			callback(body, body);
		    }else{
			// no error, pass back a null error
			callback(null, body);
		    }
	        }else if(error){
		    callback(error, body);
		}else{
		    callback(body, body)
	        }
    	}
	);
	
};

module.exports = PushApi;

