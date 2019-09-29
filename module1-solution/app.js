(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.message = "";

  $scope.sayMessage = function () {
    return "Yaako likes to eat healthy snaks at night!";
  };

  $scope.checkTooMuch = function () {
    if ($scope.dishes != "") {
      var numberOfItems = $scope.dishes.split(",").length;

      if (numberOfItems > 3) {
        $scope.message = "Too much!";
      } else {
        $scope.message = "Enjoy!";
      }
    } else {
      $scope.message = "Please enter data first";
    }
  };
}

})();
