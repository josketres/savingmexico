angular.module('services', ['ngResource', 'config']).

factory('Customized', function($resource, ENV) {

	var host = (ENV === 'production') ? 'http://nodejs-josketres.rhcloud.com' : 'http://localhost:8080';
	return $resource(host + '/api/frontend/:id', {}, {
		query: {
			method: 'GET',
			cache: true,
			isArray: false
		}
	});
});