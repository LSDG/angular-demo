var app = angular.module('MyAngularApp',[]);

var FactoryFunction = function() {
    return {
        foo: 'A value for foo',
        bar: 'A value for bar',
        baz: 'A value for baz',
        random: ''
    };
};

var AnotherFactoryFunction = function() {
    return {
        foo: 'A different value for foo',
        bar: 'A different value for bar',
        baz: 'A different value for baz',
        random: ''
    };
};

var SimpleControllerFunction = function($scope,someothername) {
    $scope.model = someothername;
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

app.factory('ModelVal',FactoryFunction);
app.factory('OtherModelVal',AnotherFactoryFunction);

app.controller('SimpleControllerA',['$scope','ModelVal',SimpleControllerFunction]);
app.controller('SimpleControllerB',['$scope','OtherModelVal',SimpleControllerFunction]);

