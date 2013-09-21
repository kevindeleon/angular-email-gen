angular.
    module('emailGen', ['ui.bootstrap']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/', { templateUrl: 'partials/form.html', controller: MainCtrl }).
        when('/about', { templateUrl: 'partials/about.html', controller: AboutCtrl }).
        otherwise({ redirectTo: '/' });
}]);