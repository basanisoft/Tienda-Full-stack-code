'use strict'

angular.module('cms.components', [])

	.directive('productForm', function () {
        return {
            restrict: 'E',
            scope: '&',
            templateUrl: '/cms/views/products/components/form.html',
            controller: 'ProductFormController'
        };
    })

	.directive('storeForm', function() {
        return {
            restrict: 'E',
            scope: '&',
            templateUrl: '/cms/views/stores/components/form.html',
            controller: 'StoreFormController'
        };
    })
	.directive('orderForm', function() {
        return {
            restrict: 'E',
            scope: '&',
            templateUrl: '/cms/views/orders/components/form.html',
            controller: 'OrderFormController'
        };
    })

	.directive('storematerialForm', function() {
        return {
            restrict: 'E',
            scope: '&',
            templateUrl: '/cms/views/storematerials/components/form.html',
            controller: 'StorematerialFormController'
        };
    })
    .directive('cmsMenu', function() {
        return {
            restrict: 'E',
            scope: '&',
            templateUrl: '/cms/components/menu.html',
            controller: 'MenuController'
        };
    })