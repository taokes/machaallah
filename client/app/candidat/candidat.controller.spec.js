'use strict';

describe('Controller: CandidatCtrl', function () {

  // load the controller's module
  beforeEach(module('machallahApp'));
  beforeEach(module('socketMock'));

  var CandidatCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/candidats')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    CandidatCtrl = $controller('CandidatCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of candidats to the scope', function () {
    $httpBackend.flush();
    expect(scope.awesomeCandidats.length).toBe(4);
  });
});
