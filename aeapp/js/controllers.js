function MainCtrl($scope, $http) {
    $http.get('js/assets.json').then(function(res){
        $scope.assets = res.data;
        // set default banner as first in array and also default alt
        $scope.assets.header_image = $scope.assets.header_images[0].url;
        $scope.assets.header_image_alt = $scope.assets.header_images[0].alt;

        // set default video image as first in array
        $scope.assets.video_image = $scope.assets.video_images[0].url;
        $scope.assets.video_image_alt = $scope.assets.video_images[0].alt;

        // set default button image as first in array
        $scope.assets.button_image = $scope.assets.buttons[0].url;
        $scope.assets.button_image_alt = $scope.assets.buttons[0].alt;
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