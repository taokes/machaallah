'use strict';

angular.module('machallahApp')
  .controller('CoachCtrl', function ($scope, $http, socket) {
    $scope.awesomeCoachs = [];

    $http.get('/api/coachs').success(function(awesomeCoachs) {
      $scope.awesomeCoachs = awesomeCoachs;
      socket.syncUpdates('coach', $scope.awesomeCoachs);
    });

    $scope.addCoach = function() {
      if($scope.newCoach === '') {
        return;
      }
      $http.post('/api/coachs', { name: $scope.newCoach });
      $scope.newCoach = '';
    };

    $scope.deleteCoach = function(coach) {
      $http.delete('/api/coachs/' + coach._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('coach');
    });
  });
