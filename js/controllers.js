function FrontpageCtrl($scope, $routeParams, $location, $modal) {

	if ($routeParams.data) {
		$scope.data = JSON.parse($routeParams.data);
	} else {
		$scope.data = {
			header : {
				text1 : "Six Year High Schools",
				text2 : "Africa's Unholy War"
			},
			caption : {
				text1 : "Saving",
				text2 : "Mexico",
				text3 : "How Enrique Peña Nieto's sweeping reforms have changed the narrative in his narco-stained nation"
			}
		};
	}

	$scope.publish = function() {
		var data = {};
		data.header = $scope.data.header;
		data.caption = $scope.data.caption;
		var encodedData = encodeURIComponent(JSON.stringify(data));
		$location.path('/' + encodedData);
	};

	$scope.open = function() {
		var modalInstance = $modal.open({
			templateUrl: 'myModalContent.html',
			controller: ModalInstanceCtrl,
			resolve: {
				data: function() {
					return $scope.data;
				}
			}
		});
		modalInstance.result.then(function(data) {
			$scope.data = data;
			$scope.publish();
		}, function() {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};
};

var ModalInstanceCtrl = function($scope, $modalInstance, data) {

	$scope.data = data;

	$scope.ok = function() {
		$modalInstance.close($scope.data);
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
};