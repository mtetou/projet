'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$resource', function($scope, $resource) {
  
  //$scope.students = [{name: "bob", surname: "dylan"}] 
  
      var student = $resource('/students/:id.json', {studentId:'@id'}) //Creation de la ressource
  $scope.students = student.query() //Recuperation de la liste des donnees de maniere dynamique
  	});


}]);