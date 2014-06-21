(function (angular) {
    var app;

    app = angular.module('DonRepublic', ['firebase']);

    app.constant('Config', {
        'firebaseApp': 'https://don-alpha.firebaseio.com'
    });

    app.controller('LoginCtrl', ['$scope', '$rootScope', 'Config', '$firebaseSimpleLogin', function ($scope, $rootScope, Config, $firebaseSimpleLogin) {
        var ref = new Firebase(Config.firebaseApp),
            auth = $firebaseSimpleLogin(ref),
            checkUser;

        checkUser = function (user) {
            $scope.loggedIn = !!user;
        };

        auth.$getCurrentUser().then(checkUser);

        $scope.login = function () {
            auth.$login('facebook');
        };

        $scope.logout = function () {
            auth.$logout();
        };

        $rootScope.$on('$firebaseSimpleLogin:login', function (e, user) {
            checkUser(user);
        });

        $rootScope.$on('$firebaseSimpleLogin:logout', function (e, user) {
            checkUser(user);
        });
    }]);
})(window.angular);
