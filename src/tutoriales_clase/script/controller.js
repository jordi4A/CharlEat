var app = angular.module('basicApp', []);
app.controller('homeController', function ($scope){
    $scope.uname = "uname";
});

var module= angular.module('listApp',[]);
var controller = module.controller['listController'];

app.controller('listController', function initController ($scope){
    $scope.items = ['first item'];
    $scope.addItem = function(){
        if($scope.newItem){
            $scope.items.push($scope.newItem);
            $scope.newItem = undefined;
        }
    }

});