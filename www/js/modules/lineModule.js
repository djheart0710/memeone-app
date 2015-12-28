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
			})
			.state('tab.lineDetail', {
				url: '/line/{lineID}',
				views: {
					'tab-line': {
						templateUrl: 'views/line/lineDetail.html',
						controller: 'lineDetailCtrl'
					}
				},
				resolve: {
					loadCtrl: ['$ocLazyLoad', function ($ocLazyLoad){
				        return $ocLazyLoad.load('views/line/lineDetail.js');
				    }]
				}
			})
			.state('tab.order', {
				url: '/order',
				views: {
					'tab-line': {
						templateUrl: 'views/line/order.html',
						controller: 'orderCtrl'
					}
				},
				resolve: {
					loadCtrl: ['$ocLazyLoad', function ($ocLazyLoad){
				        return $ocLazyLoad.load('views/line/order.js');
				    }]
				}
			});
	});