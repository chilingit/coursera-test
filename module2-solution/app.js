(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyList = this;

  buyList.items = ShoppingListCheckOffService.getToBuyItems();

  buyList.boughtAnItem = function (itemIndex) {
    ShoppingListCheckOffService.boughtAnItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
    var service = this;

    // List of to buy items
    var toBuyItems = [
      { name: "cookies", quantity: 10 },
      { name: "milks", quantity: 2 },
      { name: "apples", quantity: 4 },
      { name: "eggs", quantity: 24 },
      { name: "soaps", quantity: 12}
    ];
    // List of bought items
    var boughtItems = [];

    service.boughtAnItem = function (itemIdex) {
      var item = toBuyItems.splice(itemIdex, 1)[0];
      boughtItems.push(item);
    };

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };
}

})();
