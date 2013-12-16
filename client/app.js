angular.module('problemFinderApp', ['firebase'])
.controller('submitProblem', function($scope, $firebase){

  var ref = new Firebase("https://problemfinder.firebaseio.com/problemList");
  $scope.problemList = $firebase(ref);

  $scope.saveProblem = function(){
    $scope.problemList.$add({body: $scope.newProblem})
    $scope.newProblem = '';
  }
});
// .controller('problemView', function($scope){

// });