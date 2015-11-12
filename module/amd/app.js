/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2015-10-13
 */
define(function (require) {

  var a = require('./a.js');
  a.print();

  document.querySelector('#button').addEventListener('click', function (event) {

    var b = require('./b.js');
    b.print();

  });

});