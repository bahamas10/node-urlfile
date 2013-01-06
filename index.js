var fs = require('fs');
var util = require('util');
var iniparser = require('iniparser');

module.exports.parseURLFile = parseURLFile;
module.exports.parseURLFileSync = parseURLFileSync;
module.exports.parseString = parseString;
module.exports.createURL = createURL;

/**
 * Parse a URL file async
 */
function parseURLFile(f, cb) {
  fs.readFile(f, function(err, buf) {
    if (err) return cb(err);
    try {
      var s = parseString(buf.toString());
      cb(null, s);
    } catch (e) {
      cb(e);
    }
  });
}

/**
 * Parser a URL file sync
 */
function parseURLFileSync(f) {
  return parseString(fs.readFileSync(f).toString());
}

/**
 * Parse a URL file string, can throw errors
 */
function parseString(s) {
  return iniparser.parseString(s).InternetShortcut.URL;
}

/**
 * create a URL file string
 */
function createURL(url) {
  return util.format('[InternetShortcut]\r\nURL=%s', url);
}
