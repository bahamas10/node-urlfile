var urlfile = require('../');

urlfile.parseURLFile(__dirname + '/daveeddy.com.url', function(err, data) {
  if (err) throw err;
  console.log(data);
});
