var fs = require('fs');

function indexDirectory(directory) {
	fs.readdir(directory, function(err, files) {
		files.forEach(function (files) {
			console.log(files);   
    	});
		fs.writeFile('./message.txt', files, function (err) {
			if (err) console.log(err);
			console.log('zapisane')
		});
	});
}

indexDirectory("/Node-task_1.6/");



