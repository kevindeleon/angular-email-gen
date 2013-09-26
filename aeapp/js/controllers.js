function MainCtrl($scope, $http, $modal, $log) {
    // retrieve data from json file
    $http.get('js/assets.json').then(function(res){
        $scope.assets = res.data;
        // set default banner as first in array and also default alt
        $scope.assets.header_image = $scope.assets.header_images[0].url;
        $scope.assets.header_image_alt = $scope.assets.header_images[0].alt;

        // set default video image as first in array and also default alt
        $scope.assets.video_image = $scope.assets.video_images[0].url;
        $scope.assets.video_image_alt = $scope.assets.video_images[0].alt;

        // set default button image as first in array and also default alt
        $scope.assets.button_image = $scope.assets.buttons[0].url;
        $scope.assets.button_image_alt = $scope.assets.buttons[0].alt;
    });

    $scope.open = function() {
        var modalInstance = $modal.open({
            templateUrl: 'sidebarModalContent.html',
            controller: SidebarModalCtrl,
            resolve: {
                assets: function() {
                    return $scope.assets;
                }
            }
        });

        modalInstance.result.then(function (selectedAsset) {
          $scope.selected = selectedAsset;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
    }
}

function SidebarModalCtrl($scope, $modalInstance, assets) {
    $scope.assets = assets;

    $scope.selected = {
        asset: $scope.assets[0]
    };

    $scope.ok = function() {
        $modalInstance.close($scope.selected.asset);
    }

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    }
}

// Controls header/navigation actions, classes, etc...
function NavCtrl ($scope, $location) {
    //function to check which page is active.
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}

// Loads any particulars into the About view
function AboutCtrl($scope) {
    $scope.test = "about test";
}