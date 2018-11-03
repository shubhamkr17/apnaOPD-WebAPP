/**
 * Master Controller
 */

angular.module('RDash')
    .controller('MasterCtrl', ['$scope', '$cookieStore', '$http', MasterCtrl]);

function MasterCtrl($scope, $cookieStore, $http) {
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

    $scope.tabs = [
    {
        id: 1,
        title:'Dynamic Title 1',
        content:'Dynamic content 1',
        department : 7
    },
    {
        id: 2,
        title:'Dynamic Title 2',
        content:'Dynamic content 2',
        department : 1
    },
    {
        id: 3,
        title:'Dynamic Title 3',
        content:'Dynamic content 3',
        department : 3
    },
    {
        id: 4,
        title:'Dynamic Title 4',
        content:'Dynamic content 4'
    },
    {
        id: 5,
        title:'Dynamic Title 5',
        content:'Dynamic content 5'
    },
    {
        id: 6,
        title:'Dynamic Title 6',
        content:'Dynamic content 6'
    },
  ];

  $scope.showSheet1 = function() {
        $scope.caseSheet1 = true;
        $scope.caseSheet2 = false;
        $scope.caseSheet3 = false;
        $scope.caseSheet4 = false;
  };

  $scope.showSheet2 = function() {
        $scope.caseSheet1 = false;
        $scope.caseSheet2 = true;
        $scope.caseSheet3 = false;
        $scope.caseSheet4 = false;
  };

  $scope.showSheet3 = function() {
        $scope.caseSheet1 = false;
        $scope.caseSheet2 = false;
        $scope.caseSheet3 = true;
        $scope.caseSheet4 = false;
  };
  $scope.showSheet4 = function() {
        $scope.caseSheet1 = false;
        $scope.caseSheet2 = false;
        $scope.caseSheet3 = false;
        $scope.caseSheet4 = true;
  };

  $scope.bookAppointment = function(){
        window.location.href = "#/book_appointment";
  };

    $http.get("http://192.168.43.240:3000/api/doctors")
    .then(function success(response){
        $scope.doctorResult = response.data;
        console.log(response.data);
    },
    function error(response) {
        console.log(response);
    });

    window.onresize = function() {
        $scope.$apply();
    };
}