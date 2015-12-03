'use strict';

angular.module('machallahApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('coach', {
        url: '/coach',
        templateUrl: 'app/coach/coach.html',
        controller: 'CoachCtrl'
      });
  });