angular.module('recursionDemo', ['RecursionHelper'])
    .controller("TreeController", function($scope) {
        $scope.treeFamily = {
            name : "Parent",
            children: [{
                name : "Child1",
                children: [{
                    name : "Grandchild1",
                    children: []
                },{
                    name : "Grandchild2",
                    children: []
                },{
                    name : "Grandchild3",
                    children: []
                }]
            }, {
                name: "Child2",
                children: []
            }]
        };
    })
    .directive("tree", function(RecursionHelper) {
        return {
            restrict: "E",
            scope: {family: '='},
            template:
            '<p>{{ family.name }}{{test }}</p>'+
            '<ul>' +
            '<li ng-repeat="child in family.children">' +
            '<tree family="child"></tree>' +
            '</li>' +
            '</ul>',
            compile: function(element) {
                return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){
                    // Define your normal link function here.
                    // Alternative: instead of passing a function,
                    // you can also pass an object with
                    // a 'pre'- and 'post'-link function.
                });
            }
        };
    });