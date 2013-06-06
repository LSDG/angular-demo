var app = angular.module('MyAngularApp',[]);

app.value('ModelVal',
    {
        foo: 'A value for foo',
        bar: 'A value for bar',
        baz: 'A value for baz',
        random: ''
    }
);

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

app.controller('SimpleController',['$scope','ModelVal',SimpleControllerFunction]);