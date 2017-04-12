(function() {
    'use strict';

    angular
        .module('routing')
        .factory('API', function($http){

        return {
        	getWeather:(city) => {
		    	return $http({
		    		type:"GET",
		    		url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7cf16558d759d14815306832bd7341e2&units=imperial`,
		    	})
		    }
    	}
    });

})();