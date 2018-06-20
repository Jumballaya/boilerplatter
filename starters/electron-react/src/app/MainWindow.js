/**
 * Main Window
 */
const electron = require('electron');
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
  constructor(options) {
    const defaults = {
      height: 600,
      width: 600,
      webPreferences: { backgroundThrottling: false },
    };
    super(Object.assign({}, defaults, options));
    this.url = options.url;
    this.loadURL(this.url);
  }
}

module.exports = MainWindow;
