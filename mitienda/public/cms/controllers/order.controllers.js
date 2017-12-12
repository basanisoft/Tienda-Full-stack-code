'use strict'

angular.module('order.controllers' , ['datatables'])
    .controller('OrderIndexController' , ['$scope' , '$http' , 'Order' , '$filter', function($scope , $http , Order , $filter){

        $scope.orders = [];

        Order.all()
            .$promise.then(function(orders) {

                $scope.orders = orders;

            });

        $scope.delete = function(id , k)
        {
            Order.delete({id : id})
                .$promise.then(
                    function(order){

                        $scope.orders.splice(k , 1);

                        Materialize.toast(
                            $('<span>' + $filter('language')('order_deleted' , true) + '</span>'),
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
    .controller('OrderCreateController' , ['$scope' , '$http' , 'Order' , '$filter' , '$location', function($scope , $http , Order , $filter , $location){

        $scope.order = {
        };

        $scope.sendForm = function() {

            Order.save($scope.order)
                .$promise.then(
                    function(order) {
                        if(angular.isDefined(order.id))
                        {
                            Materialize.toast(
                                $('<span>' + $filter('language')('order_saved' , true) + '</span>'),
                                1000,
                                '',
                                function()
                                {
                                    $scope.$apply(function() {  $location.path('/orders'); })
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
    .controller('OrderEditController' , ['$scope' , '$http' , 'Order' , '$routeParams' , '$filter' , '$location', function($scope , $http , Order , $routeParams, $filter , $location){

        $scope.order = {};

        Order.get({id : $routeParams.id})
            .$promise.then(function(order) {

                $scope.order = order;

                console.log($scope.order);

            });

        $scope.sendForm = function() {

            Order.update({ id : $routeParams.id } , $scope.order)
                .$promise.then(
                function(order) {
                    if(angular.isDefined(order.id))
                    {
                        Materialize.toast(
                            $('<span>' + $filter('language')('order_updated' , true) + '</span>'),
                            1000,
                            '',
                            function()
                            {
                                $scope.$apply(function() {  $location.path('/orders'); })
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
    .controller('OrderFormController' , ['$scope' , function($scope){

    }])