# Angular Express

Component driven [Angular](https://angularjs.org/) web application boilerplate using [jspm](http://jspm.io/), [karma](http://karma-runner.github.io/), [mocha](http://mochajs.org/), [chai](http://chaijs.com/):

- promotes component driven development
- includes powerful development server based on [Express 4](http://expressjs.com/) and [Harp](http://harpjs.com/) for ultimate developer comfort

## How to get started

First install all dependencies:

```bash
$ jspm install
$ npm install
```

To start the Angular Express server:

```bash
$ node index.js
```

then navigate to: `<ip>:9000` in your browser.

## Configuring the server

The configuration is stored in configuration files in the `/config` directory.

It can be overriden and extended using the [node-config](https://github.com/lorenwest/node-config) rules:

```bash
# Default configuration
/config/default.js

# Production configuration
/config/production.js

# Local configuration
/config/local.js
```

See [configuration files](https://github.com/lorenwest/node-config/wiki/Configuration-Files) for more information.

### v0.2.0

- Added configuration support

### v0.1.0

- Added modular structure
