if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  module.exports = 'myorgmywidget-ng';
}

(function () {
  'use strict';

  var myorgmywidgetModule = angular.module('myorgmywidget-ng', []);
  myorgmywidgetModule.directive('ngMyorgmywidget', [mywidget]);

  function mywidget($timeout) {

    return {
      restrict: 'EA',
      scope: {
        input1Field  : '@',
        input2Field  : '@',
        outputField  : '=',
        delegateField: '='
      },
      template: '<div></div>',
      link: function (scope, element, attr) {

        scope.$watch('input1Field', function () {
          console.log('input1Field=',scope.input1Field);
        });
            
        scope.$watch('input2Field', function () {
          console.log('input2Field=',scope.input2Field);
        });
            
        scope.$watch('delegateField', function (delegate) {
          if (delegate) {
              delegate.DoSomething = function () {
                  console.log('Do something');
              }
          }
        })
      }
    };
  }

}());
