
function RESTCommand(){}

RESTCommand.prototype.execute = function(request, callback){

    var action = request.getAction();

    if (!this[action]){
        //throw new RESTCommandException("Resource '" + request.getResource() + "' does not support action '" + action + "'");
        callback(null, "Resource '" + request.getResource() + "' does not support action '" + action + "'");
    }

    /*return */this[action].call(this, request, callback);
};

/*var RESTCommandException = function(message){
    this.message = message;
};*/

module.exports.RESTCommand = RESTCommand;