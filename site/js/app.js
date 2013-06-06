var app = angular.module('MyAngularApp',[]);

var model = {
    foo: 'A different value for foo',
    bar: 'A different value for bar',
    baz: 'A different value for baz',
    random: ''
};

var ServiceFunction = function(TheModel) {
    this.model = TheModel;
    this.model.random = this.generateRandomString();
};

ServiceFunction.prototype.generateRandomString = function() {
    var stringArray = [];

    for (var i =0; i < 10; i++) {
        var charCode = Math.floor(Math.random()*26);
        var char = String.fromCharCode(charCode + 97);
        stringArray.push(char);
    }

    return stringArray.join('');
};


var SimpleControllerFunction = function($scope,myservice) {
    $scope.model = myservice.model;
    $scope.newRandom = '';

    $scope.onClick = function() {
        $scope.model.random = myservice.generateRandomString();
    };

    $scope.newRandom = myservice.generateRandomString();
};

app.value('MyModel',model);
app.service('SimpleService',['MyModel',ServiceFunction]);

app.controller('SimpleControllerA',['$scope','SimpleService',SimpleControllerFunction]);
app.controller('SimpleControllerB',['$scope','SimpleService',SimpleControllerFunction]);

