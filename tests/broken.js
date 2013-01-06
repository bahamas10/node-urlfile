var urlfile = require('../');

console.log('expecting an error to be thrown');
try {
  urlfile.parseURLFileSync(__dirname + '/broken.url');
  process.exit(1);
} catch (e) {
  console.error(e.message);
  process.exit(0);
}
