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

    // initial function fired when modal is opened by "add item" button
    $scope.open = function() {
        var modalInstance = $modal.open({
            //template lives in form.html in script tags
            templateUrl: 'sidebarModalContent.html',
            controller: SidebarModalCtrl,
            // pass assets json from MainCtrl to SidebarModalCtrl - scoping
            // **note..maybe want to JUST grab sidebar_images json..maybe cahnge this?
            // **note...could also consider putting sidebar html in json file...bad practice?
            resolve: {
                assets: function() {
                    return $scope.assets;
                }
            }
        });

        // receives selectedAsset from SidebarModalCtrl ok() function
        modalInstance.result.then(function (selectedAsset) {
            // This adds multiple elements to the selected array if it exists
            if ($scope.selected) {
                $scope.selected.push(selectedAsset);
            } else {
                // if not, then instantiate it and then push.
                $scope.selected = [];
                $scope.selected.push(selectedAsset);
            }
            // This emits an event (addSidebar)
            // event picked up by our directive (addSidebarItem) in app.js
            // And then adds the selected item to the sidebar
            // **note this may not be neccessary
            // $scope.$emit('addSidebar');

        }, function () {
            // on modal cancel() from SidebarModalCtrl
            // **note not sure if we need anything here...this needs to be removed
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.removeSidebarItem = function(index) {
        $scope.selected.splice(index, 1);
    }
}

function SidebarModalCtrl($scope, $modalInstance, assets) {
    //assets received from MainCtrl resolve
    $scope.assets = assets;

    //instantiate selected.asset for use in Modal
    $scope.selected = {
        asset: null
    };

    $scope.ok = function() {
        // pass selected asset back to MainCtrl modalInstance
        $modalInstance.close($scope.selected.asset);
    }

    $scope.cancel = function() {
        // dismiss modal returns to second callback in modalInstance promise
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