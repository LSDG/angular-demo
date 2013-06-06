var app = angular.module('MyAngularApp',[]);

var DirectiveFactoryFunction = function() {
    var DirectiveDefinitionObject = {
        restrict: 'E',
        scope: {
            localName:'@',
            boundName:'='
        },
        templateUrl: './partials/dir.html'
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