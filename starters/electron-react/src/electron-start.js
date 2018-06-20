const net = require('net');

const port = process.env.PORT ? process.env.PORT - 100 : 3000;
const client = new net.Socket();
let startedElectron = false;

const tryConnection = () =>
  client.connect(
    { port },
    () => {
      client.end();
      if (!startedElectron) {
        console.log('starting electron');
        startedElectron = true;
        const exec = require('child_process').exec; // eslint-disable-line global-require
        exec('npm run dev:electron');
      }
    }
  );

tryConnection();

client.on('error', err => {
  setTimeout(tryConnection, 1000);
});
