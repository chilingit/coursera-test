(function () {
'use strict';

angular.module('common')
.service('UserDataService', UserDataService);

function UserDataService() {
  var service = this;

  var user = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    menunumber: "",
    isSignedUp: false
  };

  service.saveUserInfo = function (userInfo) {
    user = userInfo;
  };

  service.getUserInfo = function () {
    return user;
  };
}

})();
