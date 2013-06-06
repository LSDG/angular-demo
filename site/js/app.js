var app = angular.module('MyAngularApp',[]);

var DirectiveFactoryFunction = function() {
    var DirectiveDefinitionObject = {
        restrict: 'E',
        template: '<p>This is kind of a dumb directive!!!</p>'
    };

    return DirectiveDefinitionObject;
};

app.directive('dumbDirective',DirectiveFactoryFunction);