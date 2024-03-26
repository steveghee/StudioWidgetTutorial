if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  module.exports = 'myorgmywidget-ng';
}

(function () {
  'use strict';

  var myorgmywidgetModule = angular.module('myorgmywidget-ng', []);
  myorgmywidgetModule.directive('ngMyorgmywidget', ['$timeout', mywidget]);

  function mywidget($timeout) {

    return {
      restrict: 'EA',
      scope: {
        input1Field : '@',
        input2Field : '@',
        outputField : '=',
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
                  
                // anything bound to this field will see this change  
                scope.outputField = `${scope.input1Field} ${scope.input2Field}`;
            
                // but you might also want to trigger a service so add a 
                // small delay  
                $timeout(function() {
                  scope.$parent.fireEvent('completed'); 
                },10);
              }
          }
        })
      }
    };
  }

}());
