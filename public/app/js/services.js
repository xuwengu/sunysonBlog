'use strict';
var frontendServices = angular.module('frontendServices',['ngResource']);

frontendServices.factory('Blog',['$resource',
	function($resource){
		return $resource('blog/:id',{},{});
}]);

frontendServices.factory('Labs',['$resource',
	function($resource){
		return $resource('labs/:labsId',{},{});
}]);