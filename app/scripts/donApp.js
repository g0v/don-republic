/* jshint unused:false */

'use strict';
(function (angular, Firebase, config) {
    var app;

    app = angular.module('DonRepublic', ['firebase', 'ui.router', 'donTemplates', 'donCtrls']);

    app.constant('Config', {
        'firebaseApp': config.firebaseDataUrl
    });

    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('index', {
            url: '/',
            views: {
                'mainView': {templateUrl: 'default/main.html'}
            }
        });
        $stateProvider.state('issues', {
            url: '/issues',
            views: {
                'mainView': {templateUrl: 'issues/main.html'}
            }
        });
        $stateProvider.state('proposals', {
            url: '/proposals',
            views: {
                'mainView': {templateUrl: 'proposals/main.html'}
            }
        });
        $stateProvider.state('projects', {
            url: '/projects',
            views: {
                'mainView': {templateUrl: 'projects/main.html'}
            }
        });
        $stateProvider.state('tags', {
            url: '/tags',
            views: {
                'mainView': {templateUrl: 'tags/main.html'}
            }
        });
    }]);
})(window.angular, window.Firebase, window.runtimeConfig);
