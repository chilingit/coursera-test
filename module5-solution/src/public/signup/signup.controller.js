(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'UserDataService'];
function SignupController(MenuService, UserDataService) {
  var signupCtrl = this;
  signupCtrl.submitted = false;

  signupCtrl.submit = function () {
    MenuService.isMenuValid(signupCtrl.user.menunumber)
    .then(function(isValid) {
      signupCtrl.isValid = isValid;
      signupCtrl.submitted = true;
      if (isValid) {
        signupCtrl.user.isSignedUp = true;
        UserDataService.saveUserInfo(signupCtrl.user);
      }
      else {
        signupCtrl.user.isSignedUp = false;
        UserDataService.saveUserInfo(signupCtrl.user);
      }
    });
  };
}


})();
