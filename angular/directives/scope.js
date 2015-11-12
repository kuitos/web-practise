/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2015-11-10
 */
;(function (angular, undefined) {

    'use strict';

    angular
        .module('directive-scope', [])
        .controller('ctrl', Controller)
        .directive('parent', Parent)
        .directive('child', Child);

    function Controller($scope) {
        $scope.parentFn = function (info) {

            console.log(info);

        };
    }

    function Parent() {

        return {

            restrict  : 'E',
            scope     : {},
            transclude: true,
            template  : '<ng-transclude></ng-transclude>',
            link      : function (scope) {

                scope.parentFn = function (info) {

                    console.log(info);

                };

            }

        };

    }

    function Child() {

        return {

            restrict: 'E',
            scope   : {
                localFn: '&'
            },
            template: '<div ng-click="click({info:10})">ssssssss</div>',
            link    : function (scope) {
                scope.click = function (info) {
                    scope.localFn(info);
                }
            }

        };

    }

})(window.angular);

