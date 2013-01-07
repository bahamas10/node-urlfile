urlfile
=======

Parse and create .url (bookmark) files

Usage
-----

Given a URL file called `daveeddy.com.url`

``` ini
[InternetShortcut]
URL=http://www.daveeddy.com
```

Parse the URL file async

``` js
var urlfile = require('urlfile');
urlfile.parseURLFile('daveeddy.com.url', function(err, url) {
  // url => 'http://www.daveeddy.com'
});
```

Parse the URL file sync

``` js
var urlfile = require('urlfile');
var url = urlfile.parseURLFileSync('daveeddy.com.url');
// url => 'http://www.daveeddy.com'
```

Parse a URL file string

``` js
var urlfile = require('urlfile');
var url = urlfile.parseString('[InternetShortcut]\r\nURL=http://www.daveeddy.com');
// url => 'http://www.daveeddy.com'
```

Create a URL file string

``` js
var urlfile = require('urlfile');
var s = urlfile.createURL('http://www.daveeddy.com');
// s => '[InternetShortcut]\r\nURL=http://www.daveeddy.com'
```

Functions
---------

* urlfile.parseURLFile(file, function(err, url))
* urlfile.parseURLFileSync(file)
* urlfile.parseString(string)
* urlfile.createURL(url)

The 3 synchronus functions will throw any errors they encounter

Installation
------------

    npm install urlfile

License
-------

MIT License
