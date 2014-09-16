var app = angular.module('savingmexico', ['services', 'ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/:id', {
			templateUrl: 'partials/frontpage.html',
			controller: 'FrontpageCtrl'
		}).
		otherwise({
			templateUrl: 'partials/frontpage.html',
			controller: 'FrontpageCtrl'
		});
	}
]);
