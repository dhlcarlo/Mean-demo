angular.module("myApp")

.service("mainServices",function($http){
    
    //this will not be visible in other functions controlers etc
    var a,b,c,d
    
    //this will be visible in other functions controlers etc go it
    return {
        getMoviesList: function () {
            return $http.get('/getMoviesList')
            
        },
        sum: function(a,b){
            return a + b;      
        },
        multuply: function(a,b){
            
              return a * b;
        }
    }
});