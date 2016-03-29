'use strict';

/**
 * Inject style tag with my minified, one-line css
 */

module.exports = function injectCSS() {
  var stream = through.obj(function(file, enc, cb) {
    
    var template = 'function injectStyles(rule) {'+
      '// Works in IE6'+
      'var div = document.createElement("div");'+
      'div.innerHTML = "&shy;<style>" + rule + "</style>";'+
      'document.body.appendChild(div.childNodes[1]);'+
    '}'+
    'injectStyles('+file.contents+')';
    
    file.contents = new Buffer(template);
    this.push(file);
    cb();
  });

  return stream;
}