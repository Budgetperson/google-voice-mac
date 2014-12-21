var app = require('app');  // Module to control application life.
var Menu = require('menu');
var Tray = require('tray');
var Screen = require('screen');
var BrowserWindow = require('browser-window');  // Module to create native browser window.

// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  //if (process.platform != 'darwin')
    app.quit();
});

// This method will be called when atom-shell has done everything
// initialization and ready for creating browser windows.
var tray = null;
var opened = false;
app.on('ready', function() {
  tray = new Tray(__dirname + '/tray_icon.png');
  tray.on('clicked', function() {
    if(!opened && mainWindow === null) {
      var mouse_x = Screen.getCursorScreenPoint().x; // clever af, even if stupid af
      mainWindow = new BrowserWindow({width: 320, height: 480, frame: false, 'always-on-top': true, x: mouse_x - 160, y: 23});
      mainWindow.loadUrl('file://' + __dirname + '/index.html');
      opened = true;
    } else if(!opened) {
      mainWindow.show();
      opened = true;
    } else if(opened) {
      mainWindow.hide();
      opened = false;
    }
  });
  // and load the index.html of the app.

  // Emitted when the window is closed.
  // mainWindow.on('closed', function() {
  //   // Dereference the window object, usually you would store windows
  //   // in an array if your app supports multi windows, this is the time
  //   // when you should delete the corresponding element.
  //   mainWindow = null;
  // });
});