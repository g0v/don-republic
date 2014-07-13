/* jshint unused:false */

'use strict';
(function (angular, Firebase, config) {
    var app;

    app = angular.module('DonRepublic', ['firebase', 'ui.router', 'donTemplates', 'donCtrls']);

    app.constant('Config', {
        'firebaseApp': config.firebaseDataUrl
    });

    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider.state('index', {
            url: "/",
            templateUrl: "partials/state1.html"
        });
    }]);
})(window.angular, window.Firebase, window.runtimeConfig);
