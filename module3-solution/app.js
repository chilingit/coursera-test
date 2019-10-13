(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {

  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      nothingFound: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;

  list.nothingFound = false;
  list.searchTerm = "";
  list.found = [];

  list.getMatchedMenuItems = function () {
    if (this.searchTerm)
    {
      MenuSearchService.getMatchedMenuItems(this.searchTerm)
      .then(function (response) {
        list.found = response;

        if (list.found.length > 0) {
          list.nothingFound = false;
        }
        else {
          list.nothingFound = true;
        }
      });
    }
    else
    {
      list.found = [];
      list.nothingFound = true;
    }
  };
  //
  list.removeItem = function (itemIndex) {
    list.found.splice(itemIndex, 1)
  };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
        metnod: "GET",
        url:  (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
        // process result and only keep items that match
        var foundItems = [];
        var menu_items = result.data.menu_items;

        for (var i=0; i< menu_items.length; i++) {
          if (menu_items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
            foundItems.push(menu_items[i]);
          }
        }

        // return processed items
        return foundItems;
    });
  };
}

})();
