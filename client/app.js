var ref = new Firebase("https://problemfinder.firebaseio.com/problemList");

angular.module('problemFinderApp', ['firebase'])
.controller('submitProblem', function($scope, $firebase){
  $scope.problemList = $firebase(ref);

  $scope.saveProblem = function(){
    var timestamp = new Date();
    $scope.problemList.$add({body: $scope.newProblem, dateAdded: timestamp, voteCount: 0})
    $scope.newProblem = '';
  };
})
.controller('problemView', function($scope, $firebase){
  $scope.problemList = $firebase(ref);

  $scope.upvote = function(){
    this.problem.voteCount += 1;
    $scope.problemList.$save();
  }
});