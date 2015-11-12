/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2015-10-13
 */
console.log('a.js loaded');
define(function (require) {

  console.log('a.js executed');

  return {

    print: function () {
      console.log('hello a.js');
    }

  }

});