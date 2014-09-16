function FrontpageCtrl($scope, $routeParams, $location, $modal, Customized) {

	if ($routeParams.id) {
		$scope.id = $routeParams.id;

		Customized.query({
			id: $scope.id
		}, function(data) {
			$scope.data = data;
		}, function(error) {
			$location.path('/' + defaultId);
		});		$scope.data = JSON.parse($routeParams.data);
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
		var frontpage = new Customized();
		frontpage.header = $scope.data.header;
		frontpage.caption = $scope.data.caption;
		saved = frontpage.$save(function(f, putResponseHeaders) {
			$location.path('/' + f.id);
		});
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
