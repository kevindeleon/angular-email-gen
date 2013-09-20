angular
    .module('emailGen', ['ui.bootstrap'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/', {templateUrl: 'partials/form.html', controller: MainCtrl})
        .otherwise({ redirectTo: '/' });
}]);