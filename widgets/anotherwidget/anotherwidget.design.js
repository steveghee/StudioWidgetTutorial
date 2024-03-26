// This widget definition will get combined into combined-widgets.js file along with all other widget definitions
// use of anonymous func ensures nothing here leaks into global scope
(function() {
  function myorg_anotherwidget() {
    return {
      // Required, this will be used as the top level tag when it's dropped on the Canvas
      // use a custom prefix to so the name won't collide with other widgets
      elementTag: 'myorg-anotherwidget',

      // Text displayed for the widget in the Palette
      label: 'My Other Widget Label',

      // category to assign the widget to, this value will be used by the
      // project definition to filter which widgets are valid for that type of project
      // category: 'ar',

      // list of groups this widget will be included in the widget palette
      // standard value are Containers, Input, and Other
      groups : ["My Widget Grouping"],
      
      isVisibleInPalette: true,
      // optionally, you can declare this as a closure which is passed the scope from which you can get to 
      // builderSettings(studio settings file) from which you can read proprties e.g in this example, only
      // show the widget if the octo:true setting is declared
      //
      //isVisibleInPalette: function(scope) {
      //  let builderSettings = scope.$root.builderSettings || {};
      //  return !!builderSettings.octo;
      //},

      // List of properties that will be displayed in the widget properties panel once it's been 
      // dropped on the Canvas
      properties: [
        {
          name: 'inputField',
          label: 'Input',
          datatype: 'string',
          default: '',
          isBindingTarget: true,
          showInput: true
        },
        {
          name: 'countField',
          label: 'Count',
          datatype: 'number',
          default: 0,
          isBindingSource: true,
          showInput: true
        },
        {
          name: 'outputField',
          label: 'Output',
          datatype: 'InfoTable',
          default: '',
          isBindingSource: true,
          showInput: true
        }
      ],

      // List of services defined for this widget, when a event handle is dropped on this widget, these 
      // are the services that will be displayed
      services: [
      ],

      // List of events that will displayed in the widget properties panel
      events: [
        {
          name: 'completed',
          label: 'Completed'
        },
        {
          name: 'failed',
          label: 'Failed'
        }
      ],

      dependencies: {
        files         : ['js/myorganotherwidget-ng.js'],
        angularModules: ['myorganotherwidget-ng']
      },


      // HTML to render when the widget is dropped on the Canvas
      designTemplate: function () {
        return '<div class="myorganotherwidgetWidget">My Widget</div>';
      },

      /** HTML used to when the widget is rendered within the app at runtime (in Preview or View)
       * @param {*} props: widgetProperties Widget Properties Object
       * @param {*} twxWidgetEl:  cheerio/jquery element with contained widgets
       * @param {*} fullOriginalDoc entire view element, with all widgets
       * @param {*} $ Cheerio/jquery helper instance
       */
      runtimeTemplate: function (props) {
          var tmpl = '<div ng-myorganotherwidget class="myorganotherwidgetElement"  \
          input-field={{me.inputField}}                                             \
          count-field="me.countField"                                               \
          output-field="me.outputField"                                             \
          ></div>';
        return tmpl;
      },
      
      /**
       * Checks if the widget can be added to the scene.
       * @returns {boolean}
       */
      canBeAdded: function (ctrl, $scope, twxAppBuilderService, elementTag) {
        return true;
      },
      
      delegate: function () {

        /**
         * @param element
         * @return Returns the widget controller for the given widget element
         */
        function getWidgetController (widgetEl) {
          return angular.element(widgetEl).data('_widgetController');
        }

        //Delete related model-items before removing model from thingview, fixes memory-ptr errors
        this.beforeDestroy = function (element, widgetCtrl) {
        }
      
        //
        // called on init!
        //
        this.init = function(element, widgetCtrl) {
        }
      
        this.widgetCreated = function(widgetCtrl) {
        }
      
        this.widgetAdded = function(widgetCtrl, dropTarget) {
        }
      
        //
        // called when a widgets properties are altered
        //
        this.widgetUpdated = function (widgetCtrl, currentProps, changedProps, oldProps) {
        }

        return this;
      }
    
    };
  }
  
  // registers the widget in Studio so that it gets displayed in the Widget Palette, it will only show up in the
  // Widget Palette for views that this widget is registered for (as determined by category property)
  twxAppBuilder.widget('myorg_anotherwidget', myorg_anotherwidget);

}());
