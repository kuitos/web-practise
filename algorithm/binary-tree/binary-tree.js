/**
 * @author Kuitos
 * @home https://github.com/kuitos
 * @since 6/11/15. 23:36
 */
;
(function (window, undefined) {
    "use strict";

    function Node(data, leftNode, rightNode) {
        this.data = data;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }

    Node.prototype = {

        constructor: Node,

        show: function () {
            return this.data;
        }

    };

    /**
     * 二叉查找树
     * @param rootData
     * @constructor
     */
    function BinarySearchTree(rootData) {
        this.rootNode = rootData ? new Node(rootData, null, null) : null;
    }

    BinarySearchTree.prototype = {

        constructor: BinarySearchTree,

        insert: function (data) {

            var toInsertNode = new Node(data, null, null);

            if (!this.rootNode) {
                this.rootNode = new Node(data, null, null);
            } else {

                var parentNode = this.rootNode,
                    targetNode;

                while (true) {

                    if (data < parentNode.data) {

                        targetNode = parentNode.leftNode;

                        if (targetNode === null) {
                            parentNode.leftNode = toInsertNode;
                            break;
                        } else {
                            parentNode = targetNode;
                        }

                    } else {

                        targetNode = parentNode.rightNode;

                        if (targetNode === null) {
                            parentNode.rightNode = toInsertNode;
                            break;
                        } else {
                            parentNode = targetNode;
                        }
                    }
                }
            }
        }

    };

    var binarySearchTree = new BinarySearchTree(1);
    binarySearchTree.insert(10);
    binarySearchTree.insert(2);
    binarySearchTree.insert(15);

    console.log(binarySearchTree);

})(window);