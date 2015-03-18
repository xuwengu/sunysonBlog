var systemServices = angular.module('systemServices',['ngResource']);

systemServices.factory('Blog',['$resource',
	function($resource){
		return $resource('admin/blog/:id',{},{
			query:{method:'GET',isArray:true},
			save:{method:'POST'},
			update:{method:'PUT',params:{id:'@id'}},
			delete:{method:'DELETE',params:{id:'@id'}}
		});
}]);

systemServices.factory('Labs',['$resource',
	function($resource){
		return $resource('admin/labs/:labsId',{},{});
}]);