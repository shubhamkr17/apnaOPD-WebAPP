/**
 * Master Controller
 */

angular.module('RDash')
    .controller('MasterCtrl', ['$scope', '$cookieStore', '$http',MasterCtrl]);

function MasterCtrl($scope, $cookieStore,$http) {
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


    ///for toggle between search doctor/medicine/retailer/Locations
    $scope.showDoctor=true;
    $scope.searchDoctor = function(){
      $scope.showDoctor=true;
      $scope.showRetailer=false;
      $scope.showMedicine=false;
      $scope.showLocation=false;
    };
    $scope.searchRetailer = function(){
      $scope.showDoctor=false;
      $scope.showRetailer=true;
      $scope.showMedicine=false;
      $scope.showLocation=false;
    };
    $scope.searchMedicine = function(){
      $scope.showDoctor=false;
      $scope.showRetailer=false;
      $scope.showMedicine=true;
      $scope.showLocation=false;
    };
    $scope.searchLocation = function(){
      $scope.showDoctor=false;
      $scope.showRetailer=false;
      $scope.showMedicine=false;
      $scope.showLocation=true;
    };

    $http.get("http://localhost:3000/api/doctors")
    .then(function(response){
      console.log(response);
      $scope.doctors=response.data;
    });
    $http.get("http://localhost:3000/api/retailers")
    .then(function(response){
      console.log(response);
      $scope.retailers=response.data;
    });
    $http.get("http://localhost:3000/api/medicines")
    .then(function(response){
      console.log(response);
      $scope.medicines=response.data;
    });
    // $http.get("http://172.16.1.47:3000/api/locations")
    // .then(function(response){
    //   console.log(response);
    //   $scope.locations=response.data;
    // });


    window.onresize = function() {
        $scope.$apply();
    };
}
