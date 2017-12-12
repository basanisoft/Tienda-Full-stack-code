'use strict'

angular.module('storematerial.services' , [])
    .factory('Storematerial', function($resource , config) {

        return $resource(config.backendUrl+'/storematerials/:id',
            {id: '@_id'},
            {
                all: {
                    method:'GET',
                    url : config.backendUrl+'/storematerials',
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
