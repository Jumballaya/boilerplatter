const message = 'Hello World';
const rootElement = document.querySelector('#root');

const h1 = document.createElement('h1');
h1.innerText = message;
rootElement.appendChild(h1);
