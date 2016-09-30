angular.module("myApp")


.controller("bodyCtrl", ["$scope","$timeout","$interval","mainServices","$http", function($scope, $timeout,$interval,mainServices,$http){
 
    $scope.movies = []
    console.log('loading movies')
    mainServices.getMoviesList().then(function (response) {
        $scope.movies = response.data
        console.log('movies loaded')
    })
    
    $scope.needToBeShowed = true;
    
    $scope.name = "";
    

    
  $scope.postdata = function() {
  
$http.post("/getMoviesList", {'Title': $scope.title, 'Type' : $scope.type}).success(function(data){
       
  })
  
  };
    
    $scope.time = new Date();
    
    $interval(function(){
        $scope.time = new Date();
//        console.log($scope.time);
    },1000)
}]);