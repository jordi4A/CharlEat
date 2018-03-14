var app = angular.module('basicApp', []);
app.controller('homeController', function ($scope){
    $scope.uname = "Paquiiitooo";
});

function initController ($scope){
    $scope.items = ['first item'];
    $scope.addItem = function(){
        if($scope.newItem){
            $scope.items.push($scope.newItem);
            $scope.newItem = undefined;
        }
    }

}