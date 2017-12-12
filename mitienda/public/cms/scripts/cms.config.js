'use strict'

angular.module('cms.config', [
    'validation',
    'validation.rule'
])
    .value('config', {
        locale: 'en',
        backendUrl : ''
    })
    .config(['$validationProvider', function ($validationProvider) {

        $validationProvider
            .setErrorHTML(function (msg) {

                return "<label class=\"control-label has-error error\">" + msg + "</label>";

            })
            .setDefaultMsg({
                required: {
                    error: 'Required',
                    success: ''
                },
                number: {
                    error: 'Debes ingresar un número',
                    success: ''
                }
            });
    }])

    .config(function($provide) {
        // this demonstrates how to register a new tool and add it to the default toolbar
        $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions) { // $delegate is the taOptions we are decorating

            taOptions.toolbar = [
                ['h1', 'h2', 'h3', 'h4', 'h5', 'h6','p', 'pre', 'quote','bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear','justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent','html', 'insertImage','insertLink', 'insertVideo']
            ];

            return taOptions;

        }]);

    })
