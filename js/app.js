var app = angular.module('savingmexico', ['ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/:data', {
			templateUrl: 'partials/frontpage.html',
			controller: 'FrontpageCtrl'
		}).
		otherwise({
			templateUrl: 'partials/frontpage.html',
			controller: 'FrontpageCtrl'
		});
	}
]);