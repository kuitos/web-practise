/**
 * @author Kuitos
 * @homepage https://github.com/kuitos
 * @since 2015-08-02. 18:14
 */
;
(function (global, undefined) {
  "use strict";

  var fs = require('fs');

  console.log(__dirname);

  fs.readdir("/Users/Kuitos/快盘/Program/codes/kuitos/practises/", function (err, files) {
    console.log(files);
  });

})(this);