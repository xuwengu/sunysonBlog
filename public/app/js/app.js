var frontendApp = angular.module('sunysonApp',[
	'ngRoute',
	'frontendServices',
	'frontendControllers',
	'frontendDirectives'
]);

frontendApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.
		when('/',{
			templateUrl:'/app/views/main.html'
		}).
		when('/blog',{
			templateUrl:'/app/views/blog-list.html',
			controller:'blogListCtrl'
		}).
		when('/blog/:id',{
			templateUrl:'/app/views/blog-detail.html',
			controller:'blogDetailCtrl'
		}).
		when('/labs',{
			templateUrl:'/app/views/labs-list.html',
			controller:'labsListCtrl'
		}).
		when('/labs/:labsId',{
			templateUrl:'/app/views/labs-detail.html',
			controller:'labsListCtrl'
		});
}]);