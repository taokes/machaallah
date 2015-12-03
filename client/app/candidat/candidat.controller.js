'use strict';

angular.module('machallahApp')
  .controller('CandidatCtrl', function ($scope, $http, socket) {
    $scope.awesomeCandidats = [];

    $http.get('/api/candidats').success(function(awesomeCandidats) {
      $scope.awesomeCandidats = awesomeCandidats;
      socket.syncUpdates('candidat', $scope.awesomeCandidats);
    });

    $scope.addCandidat = function() {
      if($scope.newCandidat === '') {
        return;
      }
      $http.post('/api/candidats', { name: $scope.newCandidat });
      $scope.newCandidat = '';
    };

    $scope.deleteCandidat = function(candidat) {
      $http.delete('/api/candidats/' + candidat._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('candidat');
    });
  });
