/**
 * main application level module
 *
 * contains application initialization code
 * initializes routes and declares dependencies
 */
angular.
    module('emailGen', ['ui.bootstrap']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/', { templateUrl: 'partials/form.html', controller: MainCtrl }).
        when('/about', { templateUrl: 'partials/about.html', controller: AboutCtrl }).
        otherwise({ redirectTo: '/' });
}]);