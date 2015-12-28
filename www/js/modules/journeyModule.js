angular.module('journeyModule', [])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('tab.journey', {
			    url: '/journey',
			    views: {
			        'tab-journey': {
			            templateUrl: 'views/journey/journey.html',
			            controller: 'journeyCtrl'
			        }
			    },
			    resolve: {
			        loadCtrl: ['$ocLazyLoad', function ($ocLazyLoad){
			            return $ocLazyLoad.load('views/journey/journey.js');
			        }]
			    }
			});
	});