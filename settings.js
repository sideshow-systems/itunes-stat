const electron = require('electron');
const path = require('path');
const remote = electron.remote;
const {dialog} = require('electron').remote;
const fs = require('fs');

const closeBtn = document.getElementById('close-settings');
const openLibBtn = document.getElementById('choose-itunes-lib');
console.log(openLibBtn);

closeBtn.addEventListener('click', function (event) {
	var window = remote.getCurrentWindow();
	window.close();
});

openLibBtn.addEventListener('click', function (event) {
	// dialog.showOpenDialog();
	showChooseDialog();
});

function showChooseDialog() {
	dialog.showOpenDialog((fileNames) => {
		// fileNames is an array that contains all the selected
		if(fileNames === undefined){
			console.log("No file selected");
			return;
		}
		console.log(fileNames);

		filepath = fileNames[0];
		console.log(filepath);

		fs.readFile(filepath, 'utf-8', (err, data) => {
			if(err){
				alert("An error ocurred reading the file :" + err.message);
				return;
			}

			// Change how to handle the file content
			console.log("The file content is : " + data);
		});
	});
}
