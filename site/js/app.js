var app = angular.module('MyAngularApp',[]);

var DirectiveFactoryFunction = function() {

    var DirectiveLinkFunction = function(scope,ele,attrs) {
        scope.modifyDom = function() {
            var strArr = ele.text().split('');
            var colorArray = scope.colors.split(',');
            var tmpText = '';
            ele.text('');
            for (var i =0; i < strArr.length;i++) {
                var spanEle = angular.element('<span></span>');
                var colorIndex = Math.floor(Math.random()*colorArray.length);
                spanEle.append(strArr[i]);
                spanEle.css('color',colorArray[colorIndex]);
                ele.append(spanEle);
            }
        };

        scope.modifyDom();
    };

    var DirectiveDefinitionObject = {
        restrict: 'A',
        scope: {
            colors:'@'
        },
        link: DirectiveLinkFunction
    };

    return DirectiveDefinitionObject;
};

var SimpleControllerFunction = function($scope) {
    $scope.len = 10;
    $scope.colors = 'red,green,blue,orange';
};

app.directive('colorText',DirectiveFactoryFunction);
app.controller('SimpleController',['$scope', SimpleControllerFunction]);