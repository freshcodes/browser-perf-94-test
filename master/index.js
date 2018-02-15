const browserPerf = require('browser-perf')
browserPerf('http://nparashuram.com/perfslides/', function(err, res) {
	if (err) {
		console.log('ERROR: ' + err);
	} else {
		console.log(res);
	}
}, {
	selenium: 'http://localhost:4444/wd/hub',
	browsers: ['chrome']
});
