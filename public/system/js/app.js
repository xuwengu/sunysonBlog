var systemApp = angular.module('systemApp',[
	'ngRoute',
	'systemServices',
	'systemControllers'
]);

systemApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.
		when('/blog',{
			templateUrl:'/system/views/blog-list.html',
			controller:'blogListCtrl'
		})/*.
		when('/blog/:articleId',{
			templateUrl:'/admin/article-edit.html',
			controller:'articleDetailCtrl'
		})*/.otherwise({redirectTo:'/blog'});
}]);