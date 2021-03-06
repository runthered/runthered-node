var request = require('request');

function HttpGatewayApi(username, password, serviceKey, url, dlrUrl){
	this.username = username;
	this.password = password;
	this.serviceKey = serviceKey;
	this.url = (url || 'https://connect.runthered.com:14004/public_api/sms/gateway/') + this.serviceKey;
	this.dlrUrl = (dlrUrl || 'https://connect.runthered.com:14004/public_api/sms/dlr/') + this.serviceKey;
}

/**
Make a POST request using form data content to Run The Red's HTTP gateway to push a message. It uses Basic Auth, and the request library.
@param {object} options - options for HTTP request
@param {function} callback - callback function for when request is complete
@returns {string} the message Id
*/
HttpGatewayApi.prototype.pushMessage = function(options, callback) {
	var message = options.message;
	var to = options.to;
	var fromNumber = options.from;
	var billingCode = options.billingCode;
	var partnerReference = options.partnerReference;
	
	var form_data = {message: message, to: to};
	// these values are optional
	if (typeof fromNumber !== "undefined"){
		form_data.from = fromNumber;
	}
	if (typeof billingCode !== "undefined"){
		form_data.billingCode = billingCode;
	}
	if (typeof partnerReference !== "undefined"){
		form_data.partnerReference = partnerReference;
	}
	// Basic Auth
	auth = "Basic " + new Buffer(this.username + ":" + this.password).toString("base64");
	request.post(
	    this.url,
	    {
        	headers : {
        	        "Authorization" : auth
	        },
            form: form_data
    	},function (error, response, body) {
	        if (!error && response.statusCode == 200) {
		    callback(null, body);
	        }else if(error){
		    callback(error, body);
		}else{
        	    var error = new Error(body);
		    callback(error, body)
	        }
    	}
	);
	
};

/**
Make a POST request using form data content to Run The Red's HTTP gateway to query a delivery receipt using the message's message id. It uses Basic Auth, and the request library.
@param {object} options - options for HTTP request
@param {function} callback - callback function for when request is complete
@returns {object} The JSON data
*/
HttpGatewayApi.prototype.queryDlr = function(options, callback) {
	var msgId = options.id;
	// we need the message id to query it's delivery status
	var qs_data = {id: msgId};
	// Basic Auth
	auth = "Basic " + new Buffer(this.username + ":" + this.password).toString("base64");
	request({
	    uri: this.dlrUrl,
	    qs: qs_data,
	    headers : {
               "Authorization" : auth
	    }
    	},function (error, response, body) {
	        if (!error && response.statusCode == 200) {
		    dlrResponse = JSON.parse(body);
		    callback(null, dlrResponse);
	        }else if(error){
		    callback(error, body);
		}else{
		    callback(body, body);
	        }
    	}
	);
	
};

module.exports = HttpGatewayApi;

