angular.module("myApp")


.controller("bodyCtrl", ["$scope","$timeout","$interval","mainServices", function($scope, $timeout,$interval,mainServices){
 
    $scope.movies = []
    console.log('loading movies')
    mainServices.getMoviesList().then(function (response) {
        $scope.movies = response.data
        console.log('movies loaded')
    })
    
    $scope.needToBeShowed = true;
    
    $scope.name = ""
    
    $scope.sum = mainServices.sum;
     $scope.multiply = mainServices.multuply;
    
    $scope.time = new Date();
    
    $interval(function(){
        $scope.time = new Date();
//        console.log($scope.time);
    },1000)
}]);