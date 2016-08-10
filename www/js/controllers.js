angular.module('starter.controllers', [])

.controller('ProductCtrl', function($scope, $http, $ionicLoading) {
  $scope.$on('$ionicView.enter', function(event, data) {
    showLoading();
    $scope.dishId = data.stateParams && data.stateParams.dishId;
    getDish($scope.dishId);

  });

    function getDish(dishId) {
      console.log('getDish', dishId);
      if(dishId) {
        $http.get('https://api.gookers.com/gk_dev_v1/dishes/' + dishId, {headers: {Authorization: 'Basic YmJiYjoxMjM0NTY='}})
          .then(function (result) {
            console.log(result);
            if (result && result.data) {
              $scope.dish = result.data;
            }
            hideLoading();
          }, function () {
            hideLoading();
          })


      } else {
        hideLoading();
      }
    }

  function showLoading() {
    $ionicLoading.show({
      template: 'Chargement...'
    })
  }

    function hideLoading() {
      $ionicLoading.hide();
    }

})
