/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2015-12-11
 */
;(function (angular, undefined) {

  'use strict';

  var app = angular
    .module('router', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .decorator('uiViewDirective', function ($delegate) {

      /**
       * Shared ui-view code for both directives:
       * Given scope, element, and its attributes, return the view's name
       */
      function getUiViewName(scope, attrs, element, $interpolate) {
        var name = $interpolate(attrs.uiView || attrs.name || '')(scope);
        var inherited = element.inheritedData('$uiView');
        return name.indexOf('@') >= 0 ? name : (name + '@' + (inherited ? inherited.state.name : ''));
      }

      var injector = angular.element(document.querySelector('[ng-app]')).injector();

      console.log(angular.injector(['ng']).get('$location'));

      $delegate.pop();
      $delegate.push(injector.invoke(['$compile', '$controller', '$interpolate', '$state', function ($compile, $controller, $interpolate, $state) {

        return {

          restrict: 'ECA',
          priority: -400,
          compile : function (tElement) {
            var initial = tElement.html();
            return function (scope, $element, attrs) {
              var current = $state.$current,
                name = getUiViewName(scope, attrs, $element, $interpolate),
                locals = current && current.locals[name];

              if (!locals) {
                return;
              }

              $element.data('$uiView', {name: name, state: locals.$$state});
              $element.html(locals.$template ? locals.$template : initial);

              var link = $compile($element.contents());

              if (locals.$$controller) {
                locals.$scope = scope;
                locals.$element = $element;
                var controller = $controller(locals.$$controller, locals);
                if (locals.$$controllerAs) {
                  scope[locals.$$controllerAs] = controller;
                }
                $element.data('$ngControllerController', controller);
                $element.children().data('$ngControllerController', controller);
              }

              link(scope);
            };
          }

        }

      }]));

      return $delegate;

    });

  config.$inject = ['$stateProvider', '$urlRouterProvider'];
  function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider

      .state('home', {
        url        : '/',
        templateUrl: 'partials/home.html'
      })

      .state('index1', {
        url        : '/index1',
        templateUrl: 'partials/index1.html'
      })

      .state('index2', {
        url        : '/index2',
        templateUrl: 'partials/index2.html'
      });

  }

})(window.angular);

