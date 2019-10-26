(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['user', 'MenuService', 'ApiPath'];
function MyinfoController(user, MenuService, ApiPath) {
  var myInfoCtrl = this;
  myInfoCtrl.user = user;
  myInfoCtrl.basePath = ApiPath;

  if (user.isSignedUp) {
    MenuService.getMenuItem(user.menunumber).then(function(menuItem) {
      myInfoCtrl.menuItem = menuItem;
    });
  }
}

})();
