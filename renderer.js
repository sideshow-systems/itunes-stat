const electron = require('electron');
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow;


// Settings window
let settingsWin;

function createSettingsWindow() {
	settingsWin = new BrowserWindow({
		width: 500,
		height: 130,
		// frame: false,
		// alwaysOnTop: true,
		webPreferences: {
			nodeIntegration: true
		}
	});

	// and load the index.html of the app.
	settingsWin.loadFile('settings.html');

	// Open the DevTools.
	settingsWin.webContents.openDevTools();

	// Emitted when the window is closed.
	settingsWin.on('closed', function () {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		settingsWin = null;
	});
}

document.querySelector('#open-settings').addEventListener('click', () => {
	createSettingsWindow();
});

document.querySelector('#close-settings').addEventListener('click', () => {
	settingsWin.close();
});