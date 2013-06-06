var app = angular.module('MyAngularApp',[]);

var ParentController = function($scope) {
    $scope.model = {
        foo: 'A value for foo',
        bar: 'A value for bar',
        baz: 'A value for baz'
    };
};

var ChildControllerLeft = function($scope) {
    $scope.leftmodel = {
        foo: 'Left Child Value for foo',
        bar: 'Left Child Value for bar',
        baz: 'Left Child Value for baz'
    };
};

var ChildControllerRight = function($scope) {
    $scope.rightmodel = {
        foo: 'Right Child Value for foo',
        bar: 'Right Child Value for bar',
        baz: 'Right Child Value for baz'
    };
};