angular.module('onecredit', ['ngAnimate', 'ui.bootstrap']);
angular.module('onecredit').controller('RatingController',['$scope', function ($scope) {
  $scope.rate = 2;
  $scope.max = 5;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];
}]);

// Test specs written Jasmine to test RatingDemoCtrl controller

describe('RatingController', function() {
  beforeEach(module('onecredit'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

    it('rates books from 1 star to 5 stars', function() {
      var $scope = {};
      var controller = $controller('RatingController', { $scope: $scope });
      $scope.rate = 2;
      $scope.max = 5;
      $scope.isReadonly = false;
      $scope.hoveringOver(v);
      $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];
      expect($scope.overStar).toEqual(v);
      expect($scope.rate).toBe(2);
      expect($scope.max).toEqual(5);
      expect($scope.isReadonly).not.toBeTruthy();
      expect($scope.ratingStates).toContain({stateOff: 'glyphicon-off'});


    });
});