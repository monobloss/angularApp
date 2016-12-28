var myMarvelHeroesApp = angular.module('myMarvelHeroesApp', ['ngRoute', 'ngAnimate']);

myMarvelHeroesApp.config(['$routeProvider', function($routeProvider){
    $routeProvider

.when('/home', {templateUrl: "views/home.html"})

.when('/heroesapp', {templateUrl: "views/heroesapp.html", controller: "HeroesController"

                    }).otherwise({
        redirectTo: '/home'
    });

}]);


myMarvelHeroesApp.controller('HeroesController', ['$scope', '$http', function($scope, $http){

   	$scope.isActive = false;
  $scope.activeButton = function() {
    $scope.isActive = !$scope.isActive;
  }  
    
    
    $scope.removeHero = function(hero){
        var removedHero = $scope.heroes.indexOf(hero);
        $scope.heroes.splice(removedHero, 1);
    }
 
 $scope.addHero = function(){
     $scope.heroes.push({
         name: $scope.newhero.name,
         power: $scope.newhero.power,
         origin: $scope.newhero.origin,
        wealth: parseInt($scope.newhero.wealth),
        selected: true
        });
            $scope.newhero.name = "";
         $scope.newhero.power = "";
         $scope.newhero.origin = "";
      $scope.newhero.wealth = "";
 }
  $http.get('app/lib/data.json').then(function(response){
  
  $scope.heroes = response.data;
});

    
    
}]);
