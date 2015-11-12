/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2015-10-13
 */
console.log('b.js loaded')
define(function (require) {

  console.log('b.js executed');

  return {

    print: function () {
      console.log('hello b.js');
    }

  }

});