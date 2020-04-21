//Constructor
function ADTRequest(){

}

ADTRequest.prototype.makeRequest = function(methodName,params){
	//console.log(adtString.serviceHost);

	$.ajax({

		url:'http://' + adtString.serviceHost + ':' + 
						adtString.AdTominPort + '/' +
						methodName + '/?' + params  +
						'&format=jsonp&callback='   +
						'adtResponse.' + methodName.toLowerCase() + 'Response',
		type: "POST",
		dataType: 'jsonp',
		jsonp:'adtResponse.' + methodName.toLowerCase() + 'Response',
		async:'false',
		data:{
    		csrfmiddlewaretoken: window.CSRF_TOKEN
    	},
    	success:function (data) {
      	},
	});
}



var adtRequest = new ADTRequest();