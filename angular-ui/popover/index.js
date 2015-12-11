/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2015-12-09
 */
;(function (angular, undefined) {

  'use strict';

  angular.module('app', ['ui.bootstrap'])

    /**
     * @author Kuitos
     * @homepage https://github.com/kuitos
     * 增强popover,使其具备点击其他地方时自动隐藏的能力
     */
    .directive('docClickClose', ['$document', function ($document) {

      /**
       * 根据当前点击的节点获取最近的closeable节点信息，使得closeable属性节点具备捕获事件能力(模拟事件冒泡)
       * @returns 找到了则返回相应节点，否则返回null
       */
      function getCloseableNode(rootNode, targetNode) {

        if (!rootNode.contains(targetNode)) {
          return null;
        } else {
          if (rootNode.hasAttribute("closable")) {
            return rootNode;
          } else {

            if (targetNode.hasAttribute("closable")) {
              return targetNode;
            }

            return getCloseableNode(rootNode, targetNode.parentNode);
          }
        }
      }

      return {

        restrict: 'A',
        link    : function (scope, element) {

          function documentClickCb(event) {

            var elementDom = element[0],
              popupElement = elementDom.nextElementSibling || null,

              isDocumentClicked = !elementDom.contains(event.target) && popupElement && popupElement.hasAttribute('uib-popover-popup')
                && !popupElement.contains(event.target),

              closableNode = popupElement && getCloseableNode(popupElement, event.target),
              mockEvent;

            // 点击为非当前按钮点击 且 popover为开启状态 且 点击不是popup内容区 则手动触发按钮click,从而toggle popup
            // FIXME 不兼容 append-body 情况
            if (isDocumentClicked || closableNode !== null) {

              mockEvent = document.createEvent('MouseEvent');
              mockEvent.initEvent('click', true, true);
              elementDom.dispatchEvent(mockEvent);

            } else {

            }

          }

          $document.bind('click', documentClickCb);

          scope.$on('destroy', function () {
            $document.unbind('click', documentClickCb);
          });

        }

      };

    }]);

})(window.angular);

