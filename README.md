![angular-express-header](https://cloud.githubusercontent.com/assets/1859381/8266502/d94e93ce-1731-11e5-9b9d-9b9e58c5369f.png)

[Angular Express](https://github.com/angular-express/angular-express) boilerplate to start a modern component driven [Angular](https://angularjs.org/) web application from scratch.

Features:

- automatic compilation of ES6 with [Babel](https://babeljs.io/)
- pre-configured package management using [jspm](http://jspm.io/)
- pre-configured unit testing with [karma](http://karma-runner.github.io/), [mocha](http://mochajs.org/), [chai](http://chaijs.com/) and [PhantomJS](http://phantomjs.org/)
- powerful development server based on [Express 4](http://expressjs.com/) and [Harp](http://harpjs.com/) with preprocessor support for [Jade](http://jade-lang.com/), [Markdown](http://daringfireball.net/projects/markdown/), [EJS](http://www.embeddedjs.com/), [Coffeescript](http://coffeescript.org/), [Sass](http://sass-lang.com/), [LESS](http://lesscss.org/) and [Stylus](https://learnboost.github.io/stylus/).

## How to get started

Make sure you have the [Angular Express CLI tool](https://github.com/angular-express/ngx-cli) installed:

```bash
$ npm install -g ngx-cli
```

Create a new project directory:

```bash
$ mkdir project
$ cd project
```

Initialize the boilerplate:

```bash
$ ngx init
```

Install third-party dependencies:

```bash
$ jspm install
$ npm install
```

Finally start the Angular Express server:

```bash
$ node index.js
```

and navigate to: `<ip>:9000` in your browser.

## How the configuration works

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

## How the Angular side works

The main JavaScript entry point for the Angular application is `src/app.js`:

```javascript
import angular from "angular";
import c1 from 'components/sample-component/_build/index';

/**************************************************************************
 * Define Angular application
 *************************************************************************/

var ngModule = angular.module('app', []);

/**************************************************************************
 * Initialize components and pass component specific options
 *************************************************************************/

c1(ngModule, {baseUrl: '/components/sample-component'});
```

It uses ES6 syntax and promotes a component driven structure where each component is imported separately.

Components are then passed the Angular module and component specific options so they can dynamically configure themselves and attach them to the main Angular module.

The main markup entry point is `src/index.jade`. It dynamically loads `app.js` like this:

```javascript
//- Load jspm loader and configuration
script(src="jspm_packages/system.js")
script(src="config.js")

//- Try to load bundle if running in production
if environment === "production"
    script(src="build.js")

//- Bootstrap the application
script.
    System.import('app');
```

and dependencies are loaded on demand.

In production mode, it tries to load `src/build.js` to pre-load dependencies.

To generate the `src/build.js`, run:

```bash
$ jspm bundle app --minify
```

from the root of the project.



## How to run unit tests

Make sure the Karma CLI is installed:

```bash
$ npm install -g karma-cli
```

To run the tests:

```bash
$ karma start
```

## License

[MIT](LICENSE)

## Change log

### v0.2.0

- Added configuration support

### v0.1.0

- Added modular structure
