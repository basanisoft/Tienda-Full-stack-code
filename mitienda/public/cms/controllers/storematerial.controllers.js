'use strict'

angular.module('storematerial.controllers' , [])
    .controller('StorematerialIndexController' , ['$scope' , '$http' , 'Storematerial' , '$filter', function($scope , $http , Storematerial , $filter){

        $scope.storematerials = [];

        Storematerial.all()
            .$promise.then(function(storematerials) {

                $scope.storematerials = storematerials;

            });

        $scope.delete = function(id , k)
        {
            Storematerial.delete({id : id})
                .$promise.then(
                    function(storematerial){

                        $scope.storematerials.splice(k , 1);

                        Materialize.toast(
                            $('<span>' + $filter('language')('Deleted' , true) + '</span>'),
                            1000
                        );
                    },
                    function(err)
                    {
                        Materialize.toast(
                            $('<span>' + err.data.error + '</span>'),
                            1000
                        );
                    }
                )
        }



    }])
    .controller('StorematerialCreateController' , ['$scope' , '$http' , 'Storematerial' , '$filter' , '$location', function($scope , $http , Storematerial , $filter , $location){

        $scope.storematerial = {
        };

        $scope.sendForm = function() {

            Storematerial.save($scope.storematerial)
                .$promise.then(
                    function(storematerial) {
                        if(angular.isDefined(storematerial.id))
                        {
                            Materialize.toast(
                                $('<span>' + $filter('language')('Store Product Saved' , true) + '</span>'),
                                1000,
                                '',
                                function()
                                {
                                    $scope.$apply(function() {  $location.path('/storematerials'); })
                                }

                            );
                        }
                    },
                    function(err){

                        var message = '';

                        if(err.status == 400)
                        {

                            angular.forEach(err.data, function (field , f) {

                                if(f != 'slug')
                                {
                                    angular.forEach(field, function (error) { console.log(field)

                                        if (message != '') {
                                            message += '<br>';
                                        }
                                        error = $filter('slugify')(error , '_');
                                        error = error.replace('.' , '');
                                        message += $filter('language')(error , true);
                                    })
                                }
                            })
                        }
                        else if(err.status == 500)
                        {
                            message += err.data.error;
                        }
                        else
                        {
                            message += 'server_error';
                        }

                        Materialize.toast($('<span class="error">'+message+'</span>'), 5000);

                    }
                )
        }

    }])
    .controller('StorematerialEditController' , ['$scope' , '$http' , 'Storematerial' , '$routeParams' , '$filter' , '$location', function($scope , $http , Storematerial , $routeParams, $filter , $location){

        $scope.storematerial = {};

        Storematerial.get({id : $routeParams.id})
            .$promise.then(function(storematerial) {

                $scope.storematerial = storematerial;

                console.log($scope.storematerial);

            });

        $scope.sendForm = function() {

            Storematerial.update({ id : $routeParams.id } , $scope.storematerial)
                .$promise.then(
                function(storematerial) {
                    if(angular.isDefined(storematerial.id))
                    {
                        Materialize.toast(
                            $('<span>' + $filter('language')('Store Product Updated' , true) + '</span>'),
                            1000,
                            '',
                            function()
                            {
                                $scope.$apply(function() {  $location.path('/storematerials'); })
                            }

                        );
                    }
                },
                function(err){

                    var message = '';

                    if(err.status == 400)
                    {
                        angular.forEach(err.data, function (field , f) {

                            if(f != 'slug')
                            {
                                angular.forEach(field, function (error) { console.log(field)

                                    if (message != '') {
                                        message += '<br>';
                                    }
                                    error = $filter('slugify')(error , '_');
                                    error = error.replace('.' , '');
                                    message += $filter('language')(error , true);
                                })
                            }
                        })
                    }
                    else if(err.status == 500)
                    {
                        message += err.data.error;
                    }
                    else
                    {
                        message += 'server_error';
                    }

                    Materialize.toast($('<span class="error">'+message+'</span>'), 5000);

                }
            )
        }

    }])
	.controller('StorematerialFormController' , ['$scope' ,'Store','Product' , function($scope, Store, Product){
		
		$scope.stores = [];

        Store.all()
            .$promise.then(
                function(stores)
                {
                    $scope.stores = stores;
                }
            );
		
		$scope.products = [];

        Product.all()
            .$promise.then(
                function(products)
                {
                    $scope.products = products;
                }
            );
    }])