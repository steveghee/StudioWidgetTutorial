// This widget definition will get combined into combined-widgets.js file along with all other widget definitions
// use of anonymous func ensures nothing here leaks into global scope
(function() {
  function myorg_mywidget() {
    return {
      // Required, this will be used as the top level tag when it's dropped on the Canvas
      // use a custom prefix to so the name won't collide with other widgets
      elementTag: 'myorg-mywidget',

      // Text displayed for the widget in the Palette
      label: 'My Widget Label',

      // category to assign the widget to, this value will be used by the
      // project definition to filter which widgets are valid for that type of project
      category: 'ar',

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
          name: 'input1Field',
          label: 'Input 1',
          datatype: 'string',
          default: '',
          isBindingTarget: true,
          showInput: true
        },
        {
          name: 'input2Field',
          label: 'Input 2',
          datatype: 'string',
          default: '',
          isBindingTarget: true,
          showInput: true
        },
        {
          name: 'outputField',
          label: 'Output',
          datatype: 'string',
          default: '',
          isBindingSource: true,
          showInput: true
        }
      ],

      // List of services defined for this widget, when a event handle is dropped on this widget, these 
      // are the services that will be displayed
      services: [
        {
            name: 'DoSomething',
            label: 'Do Something'
        }
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
        files         : ['js/myorgmywidget-ng.js'],
        angularModules: ['myorgmywidget-ng']
      },


      // HTML to render when the widget is dropped on the Canvas
      designTemplate: function () {
        return '<div class="myorgmywidgetWidget">My Widget</div>';
      },

      /** HTML used to when the widget is rendered within the app at runtime (in Preview or View)
       * @param {*} props: widgetProperties Widget Properties Object
       * @param {*} twxWidgetEl:  cheerio/jquery element with contained widgets
       * @param {*} fullOriginalDoc entire view element, with all widgets
       * @param {*} $ Cheerio/jquery helper instance
       */
      runtimeTemplate: function (props) {
          var tmpl = '<div ng-myorgmywidget class="myorgmywidgetElement"  \
          input1-field={{me.input1Field}}                                 \
          input2-field={{me.input2Field}}                                 \
          output-field="me.outputField"                                   \
          delegate-field="delegate"                                       \
          ></div>';
        return tmpl;
      }
    };
  }
  
  // registers the widget in Studio so that it gets displayed in the Widget Palette, it will only show up in the
  // Widget Palette for views that this widget is registered for (as determined by category property)
  twxAppBuilder.widget('myorg_mywidget', myorg_mywidget);

}());
