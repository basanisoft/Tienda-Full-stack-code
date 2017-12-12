'use strict'

angular.module('order.services' , [])
    .factory('Order', function($resource , config) {

        return $resource(config.backendUrl+'/orders/:id',
            {id: '@_id'},
            {
                all: {
                    method:'GET',
                    url : config.backendUrl+'/orders',
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
