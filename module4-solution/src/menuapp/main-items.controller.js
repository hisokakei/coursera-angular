(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['itemList'];

    function ItemsController(itemList) {
        var itemCtrl = this;
        itemCtrl.itemList = itemList;
        console.log(itemCtrl.itemList);
    }
})();