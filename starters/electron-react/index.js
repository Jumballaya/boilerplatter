const electron = require('electron'); // eslint-disable-line import/no-extraneous-dependencies
const url = require('url');
const path = require('path');
const dotenv = require('dotenv');
const MainWindow = require('./src/app/MainWindow');

// Setup environment variables
dotenv.config();

// Destructure from electron and set up globals
const { app, ipcMain } = electron;
let mainWindow;

// Create Window
function createWindow() {
  // Main Window Setup
  const indexHTML =
    'http://localhost:3000' ||
    url.format({
      pathname: path.join(__dirname, '/../build/index.html'),
      protocol: 'file:',
      slashes: true,
    });

  mainWindow = new MainWindow({
    url: indexHTML,
  });
}

// Ready Event
app.on('ready', createWindow);

// Activate Event
app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
