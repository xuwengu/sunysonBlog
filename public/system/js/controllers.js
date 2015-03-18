var systemControllers = angular.module('systemControllers',[]);

systemControllers.controller('blogListCtrl',['$scope','Blog','$location','$sce',
	function($scope,Blog,$location,$sce){
		Blog.query(function (data){
			$scope.blogList = data;	
			$scope.activeBlog = data[0];
			$scope.activeBlogContent = function(){
				return $sce.trustAsHtml($scope.activeBlog.content);
			}
		});
		$scope.activeBlog = $scope.blogList;

		$scope.addBlog = function (){
			Blog.save($scope.Blog);
			$location.path('/blogList');
		};
		
		$scope.selBlog = function(index){
			$scope.activeBlog = $scope.blogList[index];
		};
		$scope.delBlog = function(id){
			Blog.delete({id:id});
			$scope.blogList = Blog.query();
			Blog.query(function (data){
				$scope.blogList = data;	
				$scope.activeBlog = data[0];
			});
		}
}]);

systemControllers.controller('articleDetailCtrl',['$scope','$routeParams','Blog','$location',
	function($scope,$routeParams,Blog,$location){
		$scope.Blog = Blog.get({articleId:$routeParams.articleId},function(Blog){
			$scope.Blog = Blog;
		});
		$scope.editArticle = function (){
			Blog.update($scope.Blog);
			$location.path('/blogList');
		};
}]);

systemControllers.controller('labsListCtrl',['$scope','Labs',
	function($scope,Labs){
		$scope.labs = Labs.query();
}]);

systemControllers.controller('labsDetailCtrl',['$scope','$routeParams','Labs',
	function($scope,$routeParams,Labs){
		$scope.labs = Labs.get({labsId:$routeParams.labsId},function(labs){
			$scope.labs = labs;
		});
}]);