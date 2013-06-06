var app = angular.module('MyAngularApp',[]);

var SimpleServiceProvider = function() {
    var localModel = {
        foo: 'A different value for foo',
        bar: 'A different value for bar',
        baz: 'A different value for baz',
        random: ''
    };

    var ServiceFunction = function() {
        this.model = localModel;
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

    this.$get = function() {
        return new ServiceFunction();
    };

    this.setModel = function(newModel) {
        localModel = newModel;
    };
};

var SimpleControllerFunction = function($scope,myservice) {
    $scope.model = myservice.model;
    $scope.newRandom = '';

    $scope.onClick = function() {
        $scope.model.random = myservice.generateRandomString();
    };

    $scope.newRandom = myservice.generateRandomString();
};

app.provider('SimpleService',SimpleServiceProvider);

app.controller('SimpleControllerA',['$scope','SimpleService',SimpleControllerFunction]);
app.controller('SimpleControllerB',['$scope','SimpleService',SimpleControllerFunction]);

var AppConfig = function(SimpleProvider) {
    var myNewModel = {
        foo: 'A configured value for foo',
        bar: 'A configured value for bar',
        baz: 'A configured value for baz',
        random: ''
    };

    SimpleProvider.setModel(myNewModel);
};

app.config(['SimpleServiceProvider',AppConfig]);

