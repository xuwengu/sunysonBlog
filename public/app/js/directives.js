var sunysonDirective = angular.module('frontendDirectives',[]);

/*分页*/
sunysonDirective.directive('pagination',['$location','$routeParams',function($location,$routeParams){
	return {
		restrict:'E',
		scope:true,
		transclude: true,
		templateUrl:'/app/views/paginator.html',
		replace:true, 
		link:function(scope,element,attrs){
			scope.totalPage = [];
			scope.currentPage = $routeParams.p || 1;
			scope.prePage  = parseInt(scope.currentPage) - 1;
			scope.nextPage  = parseInt(scope.currentPage) + 1;
			
			for(var i=1;i<(scope.totalCounts/scope.perPage+1);i++){
				scope.totalPage.push(i);
			}
			
			scope.hasNext = function(currentPage){
				if(scope.totalPage.length == scope.currentPage){
					return true;
				}else {
					return false;
				}
			};
			
			scope.hasPre = function(currentPage){
				if(1 == scope.currentPage){
					return true;
				}else {
					return false;
				}
			};

			scope.url =  $location.path()+'?p=';
		}
	}
}]);