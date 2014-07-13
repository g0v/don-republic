/* jshint unused:false */

'use strict';
(function (angular, Firebase, config) {
    var app;

    app = angular.module('DonRepublic', ['firebase', 'ui.router', 'donTemplates', 'donCtrls']);

    app.constant('Config', {
        'firebaseApp': config.firebaseDataUrl
    });
})(window.angular, window.Firebase, window.runtimeConfig);
