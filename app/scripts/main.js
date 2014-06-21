(function (angular) {
    var app;

    app = angular.module('DonRepublic', []);

    app.controller('LoginCtrl', function ($scope) {
        $scope.loggedIn = false;
    });
})(window.angular);
