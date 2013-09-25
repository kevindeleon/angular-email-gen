/**
*  Service Module
*
* service module declaration
*/
angular.module('emailGen.service', []);

/**
* Directive Module
*
* directive module declaration
*/
angular.module('emailGen.directive', []);

/**
* filter Module
*
* filter module declaration
*/
angular.module('emailGen.filter', []);

/**
 * main application level module
 *
 * contains application initialization code
 * initializes routes and declares dependencies
 */
angular.
    module('emailGen', ['ui.bootstrap', 'emailGen.service', 'emailGen.directive', 'emailGen.filter']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/', { templateUrl: 'partials/form.html', controller: MainCtrl }).
        when('/about', { templateUrl: 'partials/about.html', controller: AboutCtrl }).
        otherwise({ redirectTo: '/' });
}]);