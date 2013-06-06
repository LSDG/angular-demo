var app = angular.module('MyAngularApp',[]);

var DirectiveFactoryFunction = function() {
    var DirectiveLinkFunction = function(scope,ele,attrs) {

    };

    var DirectiveDefinitionObject = {
        restrict: 'E',
        template: '<span>{{randomString}}</span>',
        link: DirectiveLinkFunction
    };

    return DirectiveDefinitionObject;
};

var SimpleControllerFunction = function($scope) {
    $scope.model = {
        foo: 'A value for foo',
        bar: 'A value for bar',
        baz: 'A value for baz'
    };

};

app.directive('dumbDirective',DirectiveFactoryFunction);
app.controller('SimpleController',['$scope', SimpleControllerFunction]);