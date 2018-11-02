'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/home.html'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: 'templates/tables.html'
            })
            .state('patient', {
                url: '/patient',
                templateUrl: 'templates/profile_patient.html'
            })
            .state('doctor', {
                url: '/doctor',
                templateUrl: 'templates/profile_doctor.html'
            })
            .state('retailer', {
                url: '/retailer',
                templateUrl: 'templates/profile_retailer.html'
            });
    }
]);
