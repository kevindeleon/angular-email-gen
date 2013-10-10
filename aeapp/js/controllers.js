/**
 * controller.js
 * https://github.com/kevindeleon/angular-email-gen
 *
 * Copyright 2013, Kevin deLeon
 * Licensed under the MIT license.
 * http://github.com/kevindeleon/angular-email-gen/blob/master/LICENSE 
 *
 * Author: Kevin deLeon (http://github.com/kevindeleon)
 */

function MainCtrl($scope, $http, $modal, $log) {
    /**
     * HTML emails require absolute paths to their assets
     * These variables are to make those a bit more dynamic on different domains
     * This should allow this app to be dropped in any location as long as assets
     * stay in the same folder
     */
    var subfolder = "/aeapp";
    $scope.absolutePath = location.protocol + "//" + document.domain + subfolder;

    // retrieve data from json file
    $http.get('js/assets.json', {cache:false}).then(function(res){
        $scope.assets = res.data;
        // set default banner as first in array and also default alt
        $scope.assets.header_image = $scope.assets.header_images[0].url;
        $scope.assets.header_image_alt = $scope.assets.header_images[0].alt;

        // set default video image as first in array and also default alt, text, link, and image
        $scope.assets.video_image = $scope.assets.video_images[0].url;
        $scope.assets.video_image_link = $scope.assets.video_images[0].video_link;
        $scope.assets.video_image_alt = $scope.assets.video_images[0].alt;
        $scope.assets.video_text = "Enter a description for the video:";

        // set default button image as first in array and also default alt
        $scope.assets.button_image = $scope.assets.buttons[0].url;
        $scope.assets.button_image_alt = $scope.assets.buttons[0].alt;
    });

    /**
     * video change event fired when different videos are chosen.
     * Did this because we are changing multiple values on each change
     * the image src is still contained within the value and tied to the model
     */
    $scope.videoChange = function (video_image) {
        $scope.assets.video_image_link = video_image.video_link;
        $scope.assets.video_image_alt = video_image.alt;
    }

    // initial function fired when modal is opened by "add item" button
    $scope.open = function() {
        var modalInstance = $modal.open({
            //template lives in form.html in script tags
            templateUrl: 'sidebarModalContent.html',
            controller: SidebarModalCtrl,
            // pass assets json from MainCtrl to SidebarModalCtrl - scoping
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

        }, function () {
            // on modal cancel() from SidebarModalCtrl
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    /**
     * Removes a sidebar item created by modal form
     */
    $scope.removeSidebarItem = function(index) {
        $scope.selected.splice(index, 1);
    }

    // jquery get code button click functionality
    $('#get-code').click(function(event) {
            // clone populated mailer div
            var $clone = $('.mailer-design-option-backdrop').clone();
            
            // grab html including wrapper
            var html = $clone[0].outerHTML;

            // sesarch through value of textarea for grasshopper and replace with cloned html
            $('#code-text').val(
                $('#code-text').val().replace(/<grasshopper>/, html)
            );

            // disable button
            $('#get-code').attr("disabled", "disabled");
            
            //hide the preview div
            $('.mailer-design-option-backdrop').hide();

            // show textarea containing HTML, and show start over button
            $('#code-text, #start-over').show();
    });

    // jquery start over click button functionality
    $('#start-over').click(function(event) {
        window.location.href = "";
    });
}

function SidebarModalCtrl($scope, $modalInstance, assets) {
    // assets received from MainCtrl resolve
    $scope.assets = assets;

    // instantiate selected.asset for use in Modal
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

/**
 * Loads any particulars into the About view
 * Not truly neccessary as all about content is static right now
 */
function AboutCtrl($scope) {
    $scope.test = "about test";
}