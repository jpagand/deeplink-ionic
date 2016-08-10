angular.module('starter.controllers', [])

.controller('ProductCtrl', function($scope, $stateParams, Chats) {
  $scope.$on('$ionicView.enter', function(event, data) {
    $scope.dishId = data.stateParams && data.stateParams.dishId;
  })
})
