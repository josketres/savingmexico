'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('savingmexico')
	.controller('FrontpageCtrl', function($scope, $route, $routeParams, $location, $modal, Customized) {

		if ($routeParams.id) {
			$scope.id = $routeParams.id;

			Customized.query({
				id: $scope.id
			}, function(data) {
				$scope.data = data;
			}, function(error) {
				$location.path('/' + defaultId);
			});
		} else {
			$scope.data = {
				header: {
					text1: "Six Year High Schools",
					text2: "Africa's Unholy War"
				},
				caption: {
					text1: "Saving",
					text2: "Mexico",
					text3: "How Enrique Peña Nieto's sweeping reforms have changed the narrative in his narco-stained nation"
				}
			};
		}

		$scope.publish = function() {
			var frontpage = new Customized();
			frontpage.header = $scope.data.header;
			frontpage.caption = $scope.data.caption;
			frontpage.$save(function(saved, putResponseHeaders) {
				$location.path('/' + saved.id);
			});
		};

		$scope.edit = function() {
			var modalInstance = $modal.open({
				templateUrl: 'myModalContent.html',
				controller: ModalInstanceCtrl,
				size: 'lg',
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

		$scope.alerts = [];

		$scope.closeAlert = function(index) {
			$scope.alerts.splice(index, 1);
		};

	});

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */

function ModalInstanceCtrl($scope, $modalInstance, data) {

	$scope.data = data;

	$scope.ok = function() {
		$modalInstance.close($scope.data);
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
};