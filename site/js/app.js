var app = angular.module('MyAngularApp',[]);

var DirectiveFactoryFunction = function() {

    var genString = function(length) {
        var stringArray = [];
        var len = parseInt(length);
        var curMod = Math.floor(Math.random()*5) + 5;

        for (var i =0; i < len; i++) {
            var charCode = Math.floor(Math.random()*26);
            if (charCode % curMod === 0) {
                curMod = Math.floor(Math.random()*5) + 5;
                stringArray.push(' ');
            }
            var char = String.fromCharCode(charCode + 97);
            stringArray.push(char);
        }

        return stringArray.join('');
    };

    var DirectiveLinkFunction = function(scope,ele,attrs) {
        scope.randomString = genString(scope.stringLength);

        scope.$watch('stringLength', function(newVal,oldVal) {
            if (newVal === oldVal) {
                return;
            }
            scope.randomString = genString(scope.stringLength);
        });
    };

    var DirectiveDefinitionObject = {
        restrict: 'E',
        template: '<p>{{randomString}}</p>',
        scope: {
            stringLength:'@'
        },
        link: DirectiveLinkFunction
    };

    return DirectiveDefinitionObject;
};

var SimpleControllerFunction = function($scope) {
    $scope.len = 10;
};

app.directive('randomText',DirectiveFactoryFunction);
app.controller('SimpleController',['$scope', SimpleControllerFunction]);