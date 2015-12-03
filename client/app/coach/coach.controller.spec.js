'use strict';

describe('Controller: CoachCtrl', function () {

  // load the controller's module
  beforeEach(module('machallahApp'));
  beforeEach(module('socketMock'));

  var CoachCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/coachs')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    CoachCtrl = $controller('CoachCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of coachs to the scope', function () {
    $httpBackend.flush();
    expect(scope.awesomeCoachs.length).toBe(4);
  });
});
