var sunysonDirective = angular.module('frontendDirectives',[]);

/*分页*/
sunysonDirective.directive('pagination',['Paginator',function(Paginator){
	return {
		restrict:'E',
		scope:true,
		transclude: true,
		template:'<ul class="uk-pagination">'
		+'<li><a href="" currentPage="" ng-click="paginator.pre()"><i class="uk-icon-angle-left"></i></a></li>'
		+'<li><a href="">1</a></li>'
		+'<li><a href="">2</a></li>'
		+'<li><a href="">3</a></li>'
		+'<li><a href="" ng-click="paginator.next()"><i class="uk-icon-angle-right"></i></a></li>',
		replace:true,
		link:function(scope,element,attris){
			console.log(scope);
		}
	}
}])
