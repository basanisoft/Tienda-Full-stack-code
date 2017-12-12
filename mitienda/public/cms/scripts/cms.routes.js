    'use strict'

angular.module('cms.routes', [])
    .config(['$routeProvider' , 'checkLoginProvider' , 'checkGuestProvider', function ($routeProvider , checkLoginProvider , checkGuestProvider) {

        var checkLoggedIn = checkLoginProvider.$get;
        var checkGuest = checkGuestProvider.$get;

        $routeProvider
            .when('/login', {
                templateUrl: "views/users/login.html",
                controller: "LoginController",
                resolve: {
                    guest: checkGuest
                }
            })
            .when('/', {
                templateUrl: "views/shops/index.html",
                controller: "ShopIndexController",
            })
           
			
			.when('/products' , {
                templateUrl: "views/products/index.html",
                controller: "ProductIndexController",
                resolve : {
                    loggedIn: checkLoggedIn
                }
            })
			.when('/products/create' , {
                templateUrl: "views/products/create.html",
                controller: "ProductCreateController",
                resolve: {
                    loggedIn: checkLoggedIn
                }
            })
            .when('/products/:id/edit', {
                templateUrl: "views/products/edit.html",
                controller: "ProductEditController",
                resolve: {
                    loggedIn: checkLoggedIn
                }
            })
			
			.when('/stores' , {
                templateUrl: "views/stores/index.html",
                controller: "StoreIndexController",
                resolve : {
                    loggedIn: checkLoggedIn
                }
            })
			
            .when('/stores/create' , {
                templateUrl: "views/stores/create.html",
                controller: "StoreCreateController",
                resolve : {
                    loggedIn: checkLoggedIn
                }
            })
            .when('/stores/:id/edit' , {
                templateUrl: "views/stores/edit.html",
                controller: "StoreEditController",
                resolve : {
                    loggedIn: checkLoggedIn
                }
            })
			
			
			.when('/storematerials' , {
                templateUrl: "views/storematerials/index.html",
                controller: "StorematerialIndexController",
                resolve : {
                    loggedIn: checkLoggedIn
                }
            })
			
            .when('/storematerials/create' , {
                templateUrl: "views/storematerials/create.html",
                controller: "StorematerialCreateController",
                resolve : {
                    loggedIn: checkLoggedIn
                }
            })
            .when('/storematerials/:id/edit' , {
                templateUrl: "views/storematerials/edit.html",
                controller: "StorematerialEditController",
                resolve : {
                    loggedIn: checkLoggedIn
                }
            })
			
			.when('/orders' , {
                templateUrl: "views/orders/index.html",
                controller: "OrderIndexController",
                resolve : {
                    loggedIn: checkLoggedIn
                }
            })
			
    }])
