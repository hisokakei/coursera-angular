(function() {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/");

    MenuDataService.$inject = ['$http', 'ApiBasePath']

    function MenuDataService($http, ApiBasePath) {
        var dataSvc = this;

        dataSvc.getAllCategories = function() {
            var fnPath = ApiBasePath + "categories.json";
            var promise = $http({
                method: "GET",
                url: fnPath
            });

            return promise.then(function(r) { return r.data; });
        };

        dataSvc.getItemsForCategory = function(categoryShortName) {
            var fnPath = ApiBasePath + "menu_items.json";
            var promise = $http({
                method: "GET",
                url: fnPath,
                params: {
                    category: categoryShortName
                }
            });

            return promise.then(function(r) { return r.data.menu_items; });
        };
    }
})();