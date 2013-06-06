var app = angular.module('MyAngularApp',[]);

app.value('ModelVal',
    {
        foo: 'A value for foo',
        bar: 'A value for bar',
        baz: 'A value for baz',
        random: ''
    }
);

var DirectiveFactoryFunction = function() {

    var DirectiveControllerFunction = function($scope) {
        $scope.model = $scope.ngModel;
        $scope.newRandom = '';

        $scope.onClick = function() {
            $scope.model.random = $scope.GenerateRandomNumber();
        };

        $scope.GenerateRandomNumber = function() {
            var stringArray = [];

            for (var i =0; i < 10; i++) {
                var charCode = Math.floor(Math.random()*26);
                var char = String.fromCharCode(charCode + 97);
                stringArray.push(char);
            }

            return stringArray.join('');
        };

        $scope.newRandom = $scope.GenerateRandomNumber();
    };

    var DirectiveLinkFunction = function(scope,ele,attrs) {
    };

    var DirectiveDefinitionObject = {
        restrict: 'E',
        templateUrl:'/partials/dir.html',
        scope: {
            ngModel:'='
        },
        controller: ['$scope',DirectiveControllerFunction],
        link: DirectiveLinkFunction
    };

    return DirectiveDefinitionObject;
};

var BasicControllerFunction = function($scope) {
    $scope.model = {
        foo: 'A value for foo',
        bar: 'A value for bar',
        baz: 'A value for baz',
        random: ''
    };
};

app.controller('BasicController',['$scope',BasicControllerFunction]);
app.directive('myWidget',DirectiveFactoryFunction);