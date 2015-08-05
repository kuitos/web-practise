/**
 * @author Kuitos
 * @homepage https://github.com/kuitos
 * @since 2015-08-04. 21:51
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _classClassJs = require('../class/class.js');

var _classClassJs2 = _interopRequireDefault(_classClassJs);

var handle = 'handle';
var obj = {

  __proto__: new _classClassJs2['default'](),

  handle: handle,

  find: function find() {

    console.log('find');
  }

};

console.log([] instanceof _classClassJs2['default']);
exports['default'] = obj;
module.exports = exports['default'];