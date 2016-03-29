'use strict';

var through = require('through2');

/**
 * Inject style tag with my minified, one-line css
 */

module.exports = function injectCSS() {
  var stream = through.obj(function(file, enc, cb) {
    
    var template = 'function injectStyles(rule) {\n'+
      'var div = document.createElement("div");\n'+
      'div.innerHTML = "&shy;<style>" + rule + "</style>";\n'+
      'document.body.appendChild(div.childNodes[1]);\n'+
    '}\n'+
    "injectStyles('"+file.contents+"');\n";
    
    file.contents = new Buffer(template);
    this.push(file);
    cb();
  });

  return stream;
}