/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2015-12-14
 */
;(function () {

  'use strict';

  var script = '<div>123123</div><div>5678 <script src="index.js" type="">ssss</script></div>';

  console.log(script.match(/<script\s?.*>.*<\/script>/g));

})();