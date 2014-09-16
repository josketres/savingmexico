angular.module('services', ['ngResource']).

factory('Customized', function($resource) {
	return $resource('http://nodejs-josketres.rhcloud.com/api/frontend/:id', {}, {
		query: {
			method: 'GET',
			cache: true,
			isArray: false
		}
	});
});
