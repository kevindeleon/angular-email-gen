function MainCtrl($scope, $http) {
    $http.get('js/assets.json').then(function(res){
        $scope.assets = res.data;
        // set default banner as first in array
        $scope.assets.headerimage = $scope.assets.header_images[0].url;

        // set default video image as first in array
        $scope.assets.videoimage = $scope.assets.video_images[0].url;

        // set default button image as first in array
        $scope.assets.buttonimage = $scope.assets.buttons[0].url;
    });
}

// Controls header/navigation actions, classes, etc...
function HeaderCtrl ($scope, $location) {
    //function to check which page is active.
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}

// Loads any particulars into the About view
function AboutCtrl($scope) {
    $scope.test = "about test";
}