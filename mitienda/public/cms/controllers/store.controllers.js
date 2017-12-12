'use strict'

angular.module('store.controllers' , [])
    .controller('StoreIndexController' , ['$scope' , '$http' , 'Store' , '$filter', function($scope , $http , Store , $filter){

        $scope.stores = [];

        Store.all()
            .$promise.then(function(stores) {

                $scope.stores = stores;

            });

        $scope.delete = function(id , k)
        {
            Store.delete({id : id})
                .$promise.then(
                    function(store){

                        $scope.stores.splice(k , 1);

                        Materialize.toast(
                            $('<span>' + $filter('language')('store deleted' , true) + '</span>'),
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
    .controller('StoreCreateController' , ['$scope' , '$http' , 'Store' , '$filter' , '$location', function($scope , $http , Store , $filter , $location){

        $scope.store = {
        };

        $scope.sendForm = function() {

            Store.save($scope.store)
                .$promise.then(
                    function(store) {
                        if(angular.isDefined(store.id))
                        {
                            Materialize.toast(
                                $('<span>' + $filter('language')('store saved' , true) + '</span>'),
                                1000,
                                '',
                                function()
                                {
                                    $scope.$apply(function() {  $location.path('/stores'); })
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
    .controller('StoreEditController' , ['$scope' , '$http' , 'Store' , '$routeParams' , '$filter' , '$location', function($scope , $http , Store , $routeParams, $filter , $location){

        $scope.store = {};

        Store.get({id : $routeParams.id})
            .$promise.then(function(store) {

                $scope.store = store;

                console.log($scope.store);

            });

        $scope.sendForm = function() {

            Store.update({ id : $routeParams.id } , $scope.store)
                .$promise.then(
                function(store) {
                    if(angular.isDefined(store.id))
                    {
                        Materialize.toast(
                            $('<span>' + $filter('language')('Store updated' , true) + '</span>'),
                            1000,
                            '',
                            function()
                            {
                                $scope.$apply(function() {  $location.path('/stores'); })
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
    .controller('StoreFormController' , ['$scope' , function($scope){

    }])