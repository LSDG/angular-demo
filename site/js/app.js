var app = angular.module('MyAngularApp',[]);

var SimpleController = function($scope) {
    $scope.model = {
        foo: 'A value for foo',
        bar: 'A value for bar',
        baz: 'A value for baz',
        random: ''
    };

    var stringArray = [];

    for (var i =0; i < 10; i++) {
        var charCode = Math.floor(Math.random()*26);
        var char = String.fromCharCode(charCode + 97);
        stringArray.push(char);
    }

    $scope.model.random = stringArray.join('');
};