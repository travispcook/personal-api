Chatty.controller('ChattyController', function ($scope, $http){
	
	$scope.refresh = function() {	
		var url = "http://localhost:8765";
		$http.get(url).success(function(data) {
			$scope.messages = data;
		});
	}
	$scope.refresh();

	$scope.addMessage = function() {
		var message = $scope.newMessage;
		//format message into an object
		var input = {"input": message}
		var urlAdd = "http://localhost:8765"
		//send that object to server using POST request
		$scope.newMessage = "";
		$http.post(urlAdd, input).success(function(input) {
			$scope.refresh();
		});
	}
	

});