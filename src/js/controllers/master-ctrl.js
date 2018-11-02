/**
 * Master Controller
 */

angular.module('RDash')
    .controller('MasterCtrl', ['$scope', '$cookieStore', MasterCtrl]);

function MasterCtrl($scope, $cookieStore) {
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    $scope.getWidth = function() {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    $scope.caseSheets = [
        {
            "title":"1",
            "body":"Hi"
        },
        {
            "title":"2",
            "body":"Hi2"
        },
        {
            "title":"3",
            "body":"Hi3"
        },
        {
            "title":"4",
            "body":"Hi4"
        }
    ];

    $scope.changeTab = function(tab) {
        $scope.view_tab = tab;
    }

    window.onresize = function() {
        $scope.$apply();
    };
}