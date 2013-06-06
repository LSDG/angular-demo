var app = angular.module('MyAngularApp',[]);


var SimpleControllerFunction = function($scope) {
    $scope.model = {
        foo: 'A value for foo',
        bar: 'A value for bar',
        baz: 'A value for baz'
    };

    $scope.className = 'red';
    $scope.styleObj = {
        color:'red'
    };

    $scope.data = ['one','two','three','four'];
    $scope.onClick = function() {
        $scope.className = ($scope.className === 'red') ? 'blue' : 'red';
    };
};

var BodyControllerFunction = function($scope) {
    $scope.partials = {
        ngrepeat:'/partials/ngrepeat.html',
        ngclass:'/partials/ngclass.html',
        ngstyle:'/partials/ngstyle.html',
        ngoptions:'/partials/ngoptions.html'
    };
    $scope.activePartial = '';
    $scope.onClick = function(url) {
        $scope.activePartial=url;
    };
};

app.controller('SimpleController',['$scope',SimpleControllerFunction]);
app.controller('BodyController',['$scope',BodyControllerFunction]);


