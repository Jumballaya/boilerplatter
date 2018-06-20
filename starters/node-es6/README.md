# Node App

* Node-es6
  - Dockerfile for both dev and prod
  - Docker-compose for dev
  - Express
  - Prettier
  - ESLint
  - Babel for ES6+
  - Testing with Ava

### Commands

  * `docker-compose up -d`
    - This will create two containers: the application for development and the application for testing/linting/formatting
  * `docker build -t yourname/yourimage -f Dockerfile.prod .`
    - This will build the production image and tag it as yourname/yourimage
  * Npm
    - `npm start` - Run the transpiled application code from the build folder
    - `npm run clean` - Removes the build files
    - `npm run build` - Transpiles the application files using babel and outputs the code into the build folder
    - `npm test` - Run `*.test.js` files in the `./src/tests` folder using Ava test runner
    - `lint:js` - ESLint the application js files
    - `format:js` - Use prettier to format application files
    - `dev` - Run the application in development mode
    - `ci` - Run the linter, prettier and tests after file changes
