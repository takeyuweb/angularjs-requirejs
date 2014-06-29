require.config({
    paths: {
        angular: 'vendor/angular.min',
        jquery: 'vendor/jquery',
        domReady: 'vendor/domReady'
    },
    shim: {
        angular: {
            deps: ['jquery',],
            exports: 'angular'
        }
    }
});

require(
    [
        'angular',
        'app',
        'domReady',
        'services/userService',
        'controllers/rootController',
        'directives/ngbkFocus'
    ],
    function (angular, app, domReady) {
        'use strict';
        app.config(['$routeProvider',
            function($routeProvider) {
                $routeProvider.when('/', {
                    templateUrl: 'views/root.html',
                    controller: 'RootCtrl'
                });
            }]);
        domReady(function(){
            angular.bootstrap(document, ['MyApp']);
            $('html').addClass('ng-app: MyApp');
        });
    });
