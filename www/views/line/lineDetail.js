angular.module('lineModule')
	.controller('lineDetailCtrl', function ($scope){
		// 路线详情轮播图
		$scope.myInterval = 1000;
		$scope.slides = [
			{id: 1, img: 'img/ionic.png'},
			{id: 2, img: 'img/ionic.png'},
			{id: 3, img: 'img/ionic.png'}
		];
	});