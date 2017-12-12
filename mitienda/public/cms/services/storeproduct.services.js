'use strict'

angular.module('storeproduct.services' , [])
    .factory('Storeproduct', function($resource , config) {
        return $resource(config.backendUrl+'/storeproducts/:id',
            {id: '@_id'},
            {
                all: {
                    method:'GET',
                    url : config.backendUrl+'/storeproducts',
                    isArray: true
                },
                get: {
                    isArray: false
                },
                update: {
                    method: 'PUT'
                }

            }
        );
    })
