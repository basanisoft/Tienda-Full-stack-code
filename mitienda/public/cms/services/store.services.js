'use strict'

angular.module('store.services' , [])
    .factory('Store', function($resource , config) {
        return $resource(config.backendUrl+'/stores/:id',
            {id: '@_id'},
            {
                all: {
                    method:'GET',
                    url : config.backendUrl+'/stores',
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
