angular.module('lineModule', [])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('tab.line', {
				url: '/line',
				views: {
				    'tab-line': {
				        templateUrl: 'views/line/line.html',
				        controller: 'lineCtrl'
				    }
				},
				resolve: {
				    loadCtrl: ['$ocLazyLoad', function ($ocLazyLoad){
				        return $ocLazyLoad.load('views/line/line.js');
				    }]
				}
			});
	});