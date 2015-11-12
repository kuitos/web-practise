/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2015-10-13
 */
define(function (require) {

  var a = require('./a.js');
  a.print();

  document.querySelector('#button').addEventListener('click', function (event) {

    //require.async('./b', function (b) {
    //  b.print();
    //});

    var b = require('./b');
    b.print();

  });

});