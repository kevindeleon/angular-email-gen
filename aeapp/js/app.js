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
 * The addSidebarItem directive.  Called by the the $emit method in our modal
 * return function. It will then add a sidebar element to the sidebar. 
 * 
 * @return function
 */
emailGen.directive('addSidebarItem', function(){
    return {
        restrict: 'E',
        template: '<div ng-repeat="sidebarItem in selected" id="{{sidebarItem.id}}"><a href="{{sidebarItem.sidebar_url}}"><img src="{{sidebarItem.url}}" alt="{{sidebarItem.alt}}" /></a><br />{{sidebarItem.sidebar_text}}<br /></div>',
        // link: function(scope, element, attrs) {
        //     element.css({'font-weight' : 'bold', 'text-decoration' : "underline"});
        
        //     scope.$on('addSidebar', function() {
        //         if(element.hasClass('red')) {
        //             element.removeClass('red');
        //             element.addClass('blue');
        //         } else {
        //             element.removeClass('blue');
        //             element.addClass('red');
        //         }
        //     });
        // }
    }
});