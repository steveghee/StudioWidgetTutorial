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
           autoField : '@',
         input1Field : '@',
         input2Field : '@',
         outputField : '=',
        delegateField: '='
      },
      template: '<div></div>',
      link: function (scope, element, attr) {
          
        //per instance local storage  
        scope.data = {
            in1 : undefined, 
            in2 : undefined
        };
        
        function doWork() {
            
          if (scope.data.in1 != undefined && scope.data.in2 != undefined) {  
              
            // anything bound to this field will see this change  
            scope.outputField = scope.data.in1 + scope.data.in2;
            
            // but you might also want to trigger a service so add a 
            // small delay  
            $timeout(function() {
              scope.$parent.fireEvent('completed'); 
            },10);
            
          }
        }
        
        function toBool(v) {
          return v === 'true' || v === true;
        }

        scope.$watch('input1Field', function () {
          console.log('input1Field=',scope.input1Field);
          scope.data.in1 = scope.input1Field;           
          if (toBool(scope.autoField)) doWork();
        });
            
        scope.$watch('input2Field', function () {
          console.log('input2Field=',scope.input2Field);
          scope.data.in2 = scope.input2Field;           
          if (toBool(scope.autoField)) doWork();
        });
            
        scope.$watch('delegateField', function (delegate) {
          if (delegate) {
              delegate.DoSomething = function () {
                  
                //refactored  
                doWork();  
                
              }
          }
        })
      }
    };
  }

}());
