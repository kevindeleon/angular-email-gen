/**
 * main application level module
 *
 * contains application initialization code
 * initializes routes and declares dependencies
 */

// initialize app module
var emailGen = angular.module('emailGen', ['ui.bootstrap']);

// configure application routes
emailGen.config(function($routeProvider) {
    $routeProvider.
        when('/', { templateUrl: 'partials/form.html', controller: MainCtrl }).
        when('/about', { templateUrl: 'partials/about.html', controller: AboutCtrl }).
        otherwise({ redirectTo: '/' });
});    

/**
 * The addSidebarItem directive.
 * 
 * @return object
 */
emailGen.directive('addSidebarItem', function(){
    return {
        restrict: 'E',
        template: '<div ng-repeat="sidebarItem in selected" id="{{sidebarItem.id}}"><a href="{{sidebarItem.sidebar_url}}?utm_source={{assets.source}}&utm_medium=email&utm_campaign=enrollment"><img src="{{sidebarItem.url}}" alt="{{sidebarItem.alt}}" /></a><br />{{sidebarItem.sidebar_text}}<br /></div>',
    }
});