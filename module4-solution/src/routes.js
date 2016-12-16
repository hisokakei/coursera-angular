(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home', {
            url: '/',
            templateUrl: 'src/menuapp/templates/home.template.html'
        })

        .state('categories', {
            url: '/categories',
            templateUrl: 'src/menuapp/templates/main-categories.template.html',
            controller: 'CategoriesController as catCtrl',
            resolve: {
                categories: ['MenuDataService', function(MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })

        .state('categories.items', {
            url: '/items/{catShortName}',
            templateUrl: 'src/menuapp/templates/main-items.template.html',
            controller: 'ItemsController as itemCtrl',
            resolve: {
                itemList: ['MenuDataService', '$stateParams',
                    function(MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.catShortName);
                    }
                ]
            }
        });
    }
})();