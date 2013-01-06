var urlfile = require('../');
var fs = require('fs');

fs.readFile(__dirname + '/daveeddy.com.url', function(err, buf) {
  if (err) throw err;
  console.log(urlfile.parseString(buf.toString()));
});
