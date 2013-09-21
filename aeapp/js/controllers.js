function MainCtrl($scope, $routeParams) {
    $scope.test = "index test";
}

// Controls header/navigation actions, classes, etc...
function HeaderCtrl ($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}

// Loads any particulars into the About view
function AboutCtrl($scope, $routeParams) {
    $scope.test = "about test";
}