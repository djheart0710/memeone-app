angular.module('lineModule')
	.controller('lineCtrl', function ($scope){
		// 虚拟数据
		$scope.defaultLocation = '合肥';
		$scope.fakeLines = [
			{id: 1, name: '黄山一日游'},
			{id: 2, name: '北京三日游'},
			{id: 3, name: '北戴河'}
		];
	});