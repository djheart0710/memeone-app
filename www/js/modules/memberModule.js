angular.module('memberModule', [])
    .config(function($stateProvider, $urlRouterProvider) {
    	$stateProvider
	    	.state('tab.member', {
			    url: '/member',
			    views: {
			        'tab-member': {
			            templateUrl: 'views/member/member.html',
			            controller: 'memberCtrl'
			        }
			    },
			    resolve: {
			        loadCtrl: ['$ocLazyLoad', function ($ocLazyLoad){
			            return $ocLazyLoad.load('views/member/member.js');
			        }]
			    }
			});
    });