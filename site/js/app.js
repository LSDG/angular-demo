var app = angular.module('MyAngularApp',[]);

var SimpleController = function($scope) {
    $scope.model = {
        foo: 'A value for foo',
        bar: 'A value for bar',
        baz: 'A value for baz'
    }
}