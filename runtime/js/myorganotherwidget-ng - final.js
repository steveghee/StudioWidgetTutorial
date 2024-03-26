if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  module.exports = 'myorganotherwidget-ng';
}

(function () {
  'use strict';

  var myorganotherwidgetModule = angular.module('myorganotherwidget-ng', []);
  myorganotherwidgetModule.directive('ngMyorganotherwidget', [anotherwidget]);

  function anotherwidget($timeout) {

    return {
      restrict: 'EA',
      scope: {
         inputField  : '@',
         countField  : '=',
        outputField  : '='
      },
      template: '<div></div>',
      link: function (scope, element, attr) {

        scope.$watch('inputField', function () {
          console.log('inputField=',scope.inputField);
          if (scope.inputField != undefined) {
              var list = scope.inputField.split(' ');
            scope.outputField = list.map( (i) => { return { value:i } });  
            scope.countField = scope.outputField.length;
          }
        });
            
      }
    };
  }

}());
