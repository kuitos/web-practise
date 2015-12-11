/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2015-11-15
 */
;(function () {

    'use strict';

    function toCall(a, b) {
        return a + b;
    }

    function call() {
        toCall.call(this, 1, 2);

    }

    function apply() {
        toCall.apply(this, [1, 2])
    }

    call();

    apply();

})();