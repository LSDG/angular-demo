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

        return stringArray;
    };

    var DirectiveLinkFunction = function(scope,ele,attrs) {
        scope.modifyDom = function() {
            var strArr = genString(scope.stringLength);
            var colorArray = scope.stringColors.split(',');

            for (var i =0; i < strArr.length;i++) {
                var spanEle = angular.element('<span></span>');
                var colorIndex = Math.floor(Math.random()*colorArray.length);
                spanEle.append(strArr[i]);
                spanEle.css('color',colorArray[colorIndex]);
                ele.append(spanEle);
            }

        };

        scope.$watch('stringLength', function(newVal,oldVal) {
            if (newVal === oldVal) {
                return;
            }
            ele.text('');
            scope.modifyDom();
        });

        scope.modifyDom();
    };

    var DirectiveDefinitionObject = {
        restrict: 'E',
        scope: {
            stringLength:'@',
            stringColors:'@'
        },
        link: DirectiveLinkFunction
    };

    return DirectiveDefinitionObject;
};

var SimpleControllerFunction = function($scope) {
    $scope.len = 10;
    $scope.colors = 'red,green,blue,orange';
};

app.directive('randomText',DirectiveFactoryFunction);
app.controller('SimpleController',['$scope', SimpleControllerFunction]);