angular.module('lineModule')
	.controller('lineCtrl', function ($scope){
		// 从后台获取推荐的线路信息
		$scope.lines = {};
		$scope.fakeLines = [
			{id: 1, name: '大蜀山'},
			{id: 2, name: '北戴河'},
			{id: 3, name: '大蜀山'},
			{id: 4, name: '故宫'}
		];
	});