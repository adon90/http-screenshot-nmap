var system = require('system');

var args = system.args;
if (args.length !== 3) {
  console.log('Usage: '+args[0]+ ' <URL> <FILE_NAME>');
  phantom.exit(1);
}
var url = args[1];
var filename = args[2];

var page = require('webpage').create();

page.open(url, function (status) {
  setTimeout(function() {
    console.log('Saved screenshot as '+filename);
    page.render(filename);
    phantom.exit(0);
  }, 4000);
});
