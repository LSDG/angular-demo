var app = angular.module('MyAngularApp',[]);


var SimpleControllerFunction = function($scope) {
    $scope.settings = {
        index:0
    };
    $scope.anis = [
        {name:'None', ani: {enter:'',leave:''}},
        {name:'Fade', ani: {enter:'homefade-enter',leave:'homefade-leave'}},
        {name:'Flip', ani: {enter:'homeflip-enter',leave:'homeflip-leave'}},
        {name:'Slide', ani: {enter:'homeslide-enter',leave:'homeslide-leave'}},
        {name:'Reverse Slide', ani: {enter:'homerslide-enter',leave:'homerslide-leave'}}
    ];
    $scope.sidebarItemClick = function(itemIndex) {
        $scope.settings.index = itemIndex;
    };
    $scope.aniOptionClick = function(itemIndex) {
        $scope.settings.aniIndex = itemIndex;
        $scope.settings.aniObj = $scope.anis[itemIndex].ani;
    };
    $scope.settings.aniObj=$scope.anis[0].ani;
    $scope.settings.aniIndex=0;
};

app.controller('SimpleController',['$scope',SimpleControllerFunction]);


