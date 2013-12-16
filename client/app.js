// connects app to firebase
var firebase = new Firebase("https://problemfinder.firebaseio.com");

angular.module('problemFinderApp', [])
.controller('submitProblem', function($scope){
  $scope.saveProblem = function(){
    firebase.push(this.newProblem);
  }
});