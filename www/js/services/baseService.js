angular.module('memeoneApp')
	.factory('baseService', function ($http, $q){
		return {
			getLists: function(){
				var delay = $q.defer();
				$http.get()
					.then(function (res){
						delay.resolve(res);
					}, function (err){
						delay.reject(err);
					});
				return delay.promise;
			},
			getDetail: function(){
				var delay = $q.defer();
				$http.get()
					.then(function (res){
						delay.resolve(res);
					}, function (err){
						delay.reject(err);
					});
				return delay.promise;
			},
			postCreate: function(){
				var delay = $q.defer();
				$http.post()
					.then(function (res){
						delay.resolve(res);
					}, function (err){
						delay.reject(err);
					});
				return delay.promise;
			},
			putUpdate: function(){
				var delay = $q.defer();
				$http.put()
					.then(function (res){
						delay.resolve(res);
					}, function (err){
						delay.reject(err);
					});
				return delay.promise;
			}
		};
	});