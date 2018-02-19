(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = [$scope];
function LunchCheckController ($scope){
    $scope.message = '';
     $scope.name = '';
     $scope.class ='';

    $scope.showMsg = function () {
      if ($scope.name) {
        var items = $scope.name.split(',');
        if (items.length < 1) {
          $scope.message = 'Please enter data first';
          $scope.class ='danger';
        }
        else if (items.length <= 3) {
            $scope.message = 'Enjoy!';
            $scope.class ='success';
          }
        else {
            $scope.message = '"Too much!';
            $scope.class ='danger';
          }
        }
        else {
          $scope.message = 'Please enter data first';
          $scope.class ='danger';
        }


    }
  };
})();
