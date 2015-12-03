'use strict';

angular.module('machallahApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('candidat', {
        url: '/candidat',
        templateUrl: 'app/candidat/candidat.html',
        controller: 'CandidatCtrl'
      });
  });