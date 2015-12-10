pokerApp.controller('countDownController', function ($scope) {
	$scope.dynamic = 100;
	$scope.type = 'warning';

	frequency = 10;
	increment = 100/1500;

	$scope.start = function (){
		if($scope.dynamic <= 0) clearInterval(interval);
		interval = setInterval(function(){ updateBar() }, frequency);
	};

	function updateBar(){
		var value = $scope.dynamic - increment;

		$scope.dynamic = value;
	}
});