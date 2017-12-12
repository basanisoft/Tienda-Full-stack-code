'use strict'

angular.module('product.controllers' , [])
    .controller('ProductIndexController' , ['$scope' , '$http' , 'Product' , '$filter', function($scope , $http , Product , $filter){

        $scope.products = [];

        Product.all()
            .$promise.then(function (products) {

                $scope.products = products;

            });

        $scope.delete = function(id , k)
        {
            Product.delete({id : id})
                .$promise.then(
                    function(product){

                        $scope.products.splice(k , 1);

                        Materialize.toast(
                            $('<span>' + $filter('language')('Product deleted' , true) + '</span>'),
                            1000
                        );
                    },
                    function(err)
                    {
                        Materialize.toast(
                            $('<span class="error">' + err.data.error + '</span>'),
                            1000
                        );
                    }
                )
        }


    }])
    .controller('ProductCreateController', ['$scope', '$http', 'Product', '$filter', '$location' , 'fileUpload','config', function ($scope, $http, Product, $filter, $location , fileUpload , config) {

        $scope.product = {
            custom_fields: [],
            available : true
        };

        var imagesPermitted = ['image/jpeg' , 'image/png'];

        $scope.image = false;

        $scope.sendForm = function () {

            if(angular.isDefined($scope.image.type) )
            {
                if(!(imagesPermitted.indexOf($scope.image.type) !== -1) )
                {
                    Materialize.toast(
                        $('<span  class="error">' + $filter('language')('invalid_format_image', true) + '</span>'),
                        1000
                    )
                }
                else
                {
                    var file = $scope.image;

                    if(file)
                    {

                        var uploadUrl = config.backendUrl+"/products/upload-image/";

                        fileUpload.uploadFileToUrl(file, uploadUrl , 'image')
                            .then(
                            function(response)
                            {
                                $scope.product.image= response.name;

                                $scope.save();


                            }
                        )


                    }
                }
            }
            else
            {

                $scope.save();
            }



        }

        $scope.save = function()
        {

            Product.save($scope.product)
                .$promise.then(
                function (product) {
                    if (angular.isDefined(product.id)) {
                        Materialize.toast(
                            $('<span>' + $filter('language')('product saved', true) + '</span>'),
                            1000,
                            '',
                            function () {
                                $scope.$apply(function () {
                                    $location.path('/products');
                                })
                            }
                        );
                    }
                },
                function (err) {

                    var message = '';

                    if (err.status == 400) {
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
                    else if (err.status == 500) {
                        message += err.data.error;
                    }
                    else {
                        message += 'server_error';
                    }

                    Materialize.toast($('<span class="error">' + message + '</span>'), 3000);

                }
            )
        }

    }])
 
    .controller('ProductEditController', ['$scope', '$http', 'Product', '$routeParams', '$filter', '$location' , 'fileUpload' , 'config', function ($scope, $http, Product, $routeParams, $filter, $location , fileUpload , config) {

        $scope.product = {};

        Product.get({id: $routeParams.id})
            .$promise.then(function (product) {

                product.available = (product.available == 1) ? true : false;

                $scope.product = product;

            });



        var imagesPermitted = ['image/jpeg' , 'image/png'];

        $scope.image = false;

        $scope.sendForm = function () {

            if(angular.isDefined($scope.image.type) )
            {
                if(!(imagesPermitted.indexOf($scope.image.type) !== -1) )
                {
                    Materialize.toast(
                        $('<span  class="error">' + $filter('language')('invalid_format_image', true) + '</span>'),
                        1000
                    )
                }
                else
                {
                    var file = $scope.image;

                    if(file)
                    {

                        var uploadUrl = config.backendUrl+"/products/upload-image/";

                        fileUpload.uploadFileToUrl(file, uploadUrl , 'image')
                            .then(
                            function(response)
                            {
                                $scope.product.image= response.name;

                                $scope.update();


                            }
                        )


                    }
                }
            }
            else
            {

                $scope.update();
            }



        }

        $scope.update = function () {

            Product.update({id: $routeParams.id}, $scope.product)
                .$promise.then(
                function (product) {
                    if (angular.isDefined(product.id)) {
                        Materialize.toast(
                            $('<span>' + $filter('language')('Product updated', true) + '</span>'),
                            1000,
                            '',
                            function () {
                                $scope.$apply(function () {
                                    $location.path('/products/');
                                })
                            }
                        );
                    }
                },
                function (err) {

                    var message = '';

                    if (err.status == 400) {

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
                    else if (err.status == 500) {
                        message += err.data.error;
                    }
                    else {
                        message += 'server_error';
                    }

                    Materialize.toast($('<span class="error">' + message + '</span>'), 5000);

                }
            )
        }

    }])
    .controller('ProductFormController' , ['$scope' , function($scope ){


        $scope.isArray = function (value) {
            return angular.isArray(value);
        }

        $scope.initSelect = function () {
            setTimeout(function () {
                $('select').material_select();
            }, 1000);

        }

        $scope.initTextarea = function (el) {
            $(el).characterCounter();
        }

    }])