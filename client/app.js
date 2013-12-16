var ref = new Firebase("https://problemfinder.firebaseio.com/problemList");

angular.module('problemFinderApp', ['firebase'])
.controller('submitProblem', function($scope, $firebase){

  $scope.problemList = $firebase(ref);

  $scope.saveProblem = function(){
    $scope.problemList.$add({body: $scope.newProblem})
    $scope.newProblem = '';
  };
})
.controller('problemView', function($scope, $firebase){

  $scope.problemList = $firebase(ref);

});