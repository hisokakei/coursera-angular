(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

    // Buy
    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var buy = this;

        buy.buyItem = function(index) {
            ShoppingListCheckOffService.buy(index);
        };

        buy.buyList = ShoppingListCheckOffService.getBuyList();

        buy.isEmpty = function() {
            return buy.buyList.length === 0;
        };
    }

    // Bought
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;

        bought.boughtList = ShoppingListCheckOffService.getBoughtList();

        bought.isEmpty = function() {
            return bought.boughtList.length === 0;
        };
    }

    // ShoppingListCheckOffService
    function ShoppingListCheckOffService() {
        var service = this;

        var buyList = [
            { name: "cookies", quantity: 10 },
            { name: "chips", quantity: 5 },
            { name: "apples", quantity: 12 },
            { name: "water", quantity: 15 },
            { name: "coke", quantity: 3 }
        ];

        var boughtList = [];

        service.buy = function(index) {
            var item = buyList[index];
            boughtList.push(item);
            buyList.splice(index, 1);
        };

        service.getBuyList = function() {
            return buyList;
        };

        service.getBoughtList = function() {
            return boughtList;
        };
    }

})();