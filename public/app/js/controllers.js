var frontendControllers = angular.module('frontendControllers',[]);

frontendControllers.run(['$rootScope','$http','Blog',function($rootScope,$http,Blog){
	$http.get('/blog',{params:{counts:true}}).success(function(data){
		$rootScope.blogCounts = data;	//模块加载完成查询博客总数
	});
}]);

frontendControllers.controller('mainCtrl',['$scope',
	function($scope){
		$scope.active = 'uk-active';
		$scope.toggleActive = function(){
		}
}]);

frontendControllers.controller('blogListCtrl',['$scope','Blog','$sce','$location',
	function($scope,Blog,$sce,$location){
		$scope.blogList = Blog.query({p:$location.search().p});
		$scope.totalCounts = $scope.blogCounts;	
		$scope.perPage = 6;
}]);

frontendControllers.controller('blogDetailCtrl',['$scope','$routeParams','Blog','$sce',
	function($scope,$routeParams,Blog,$sce){
		$scope.blog = Blog.get({id:$routeParams.id});
		$scope.articleContent = function() {
            return $sce.trustAsHtml($scope.blog.content);
        };
}]);

frontendControllers.controller('labsListCtrl',['$scope','Labs',
	function($scope,Labs){
		$scope.labs = Labs.query();
}]);

frontendControllers.controller('labsDetailCtrl',['$scope','$routeParams','Labs',
	function($scope,$routeParams,Labs){
		$scope.labs = Labs.get({labsId:$routeParams.labsId},function(labs){
			$scope.labs = labs;
		});
}]);