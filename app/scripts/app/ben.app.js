'use strict';

angular.module('ben.app', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ben.api'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('main', {
                url: '/',
                template: '<h1>This my app</h1>'
            })
    });
