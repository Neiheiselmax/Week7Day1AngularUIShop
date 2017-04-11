(function() {
    'use strict';

    angular
    .module('routing', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider,$locationProvider){

  //   	$locationProvider.html5Mode({
		//   enabled: true,
		//   requireBase: false
		// });

    	$stateProvider
	    .state('home', {
	      url: '/',
	      views: {
		      'content': {
		        templateUrl: '../partials/home.html',
		      }
		   }
	    })
	    .state('godType', {
	      url: '/GodType',
	      views: {
		      'content': {
		        templateUrl: '../partials/godType.html',
		       
		      }
		   }
	    })
	    .state('gods', {
	      url: '/AllGods',
	      views: {
		      'content': {
		        templateUrl: '../partials/allGods.html',
		        
		      }
		   }
	    })
	    .state('singleCharacter', {
	      url: '/CharacterInfo',
	      views: {
		      'content': {
		        templateUrl: '../partials/singleCharacter.html',
		      
		      }
		   }
	    })
    });
        
})();