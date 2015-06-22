![angular-express-header](https://cloud.githubusercontent.com/assets/1859381/8266502/d94e93ce-1731-11e5-9b9d-9b9e58c5369f.png)

[Angular Express](https://github.com/angular-express/angular-express) boilerplate to start a modern component driven [Angular](https://angularjs.org/) web application from scratch.

Features:

- automatic compilation of ES6 with [Babel](https://babeljs.io/)
- pre-configured package management using [jspm](http://jspm.io/)
- dynamic module loading using the [SystemJS dynamic ES6 loader](https://github.com/systemjs/systemjs)
- pre-configured unit testing with [karma](http://karma-runner.github.io/), [mocha](http://mochajs.org/), [chai](http://chaijs.com/) and [PhantomJS](http://phantomjs.org/)
- powerful built-in server based on [Express 4](http://expressjs.com/) and [Harp](http://harpjs.com/) with preprocessor support for [Jade](http://jade-lang.com/), [Markdown](http://daringfireball.net/projects/markdown/), [EJS](http://www.embeddedjs.com/), [Coffeescript](http://coffeescript.org/), [Sass](http://sass-lang.com/), [LESS](http://lesscss.org/) and [Stylus](https://learnboost.github.io/stylus/).
- compile to HTML, CSS & JavaScript and host it anywhere

![ngx-boilerplate-default](https://cloud.githubusercontent.com/assets/1859381/8266835/c7d8ead8-1743-11e5-8a7c-cab17753afa7.png)

## How to get started

Ensure the [Angular Express CLI tool](https://github.com/angular-express/ngx-cli) is installed:

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
$ npm start
```

and navigate to: `<ip>:9000` in the browser.

![ngx-boilerplate-default-running](https://cloud.githubusercontent.com/assets/1859381/8289575/936cdad0-191d-11e5-934a-08fc095054ac.png)

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
//- Non production environment
//- Load jspm loader and configuration
if environment !== "production"
    script(src="_jspm_packages/system.js")
    script(src="config.js")
    //- Bootstrap the application
    script.
        System.import('app');

//- Production environment
//- Load self executing bundle
if environment === "production"
    script(src="build.js")
```

and dependencies are loaded on demand.

![component-driven-angular-development-with-angular-express](https://cloud.githubusercontent.com/assets/1859381/8271237/dbcf1462-180c-11e5-8994-d2166a27372d.png)

In production mode, it loads the minified `src/build.js` to pre-load dependencies.

To generate the `src/build.js`, run:

```bash
$ npm run build
```

from the root of the project.

## How to add components

Components are modules that contain their own:

- templates
- styles
- scripts
- assets
- unit tests

They are added to the `src/components` directory and imported in `src/app.js`.

#### Underscores

To include files that are not publicly accessible in production mode, prefix them with an `_`.

A good approach is to include a `_build` directory in a component to include files that should be available during development or build phase, but not during production.

See the [included sample component](src/components/sample-component) for an example.

#### Adding existing components

To install existing components:

```bash
$ ngx install component-name
```

See [the Angular Express component directory](https://github.com/ngx-components) for a list of ready-to-use components.

To install custom components directly from a GitHub repository:

```bash
$ ngx install github-username/github-repository-name
```

See the [Angular Express CLI documentation](https://github.com/angular-express/ngx-cli) for more information.

## How to start the server

Start the server:

```bash
# Uses NODE_ENV of your environment
$ npm start
```

Start the server in development mode:

```bash
# Uses NODE_ENV=development
$ npm run development-server
```

Start the server in production mode:

```bash
# Update src/build.js
$ npm run build

# Start production server
# Uses NODE_ENV=production
$ npm run production-server
```

## How to compile to a static application

From the root of the project, run:

```bash
$ npm run compile
```

to compile static HTML, CSS and JavaScript in `dist`.

## How to use livereload during development

Ensure you have [BrowserSync](http://www.browsersync.io/) installed:

```bash
$ npm install -g browser-sync
```

From the root of the project, run:

```bash
$ browser-sync start --proxy localhost:9000 --files "src/**/*"
```

and navigate your browser to the BrowserSync url:

```bash
 --------------------------------------
       Local: http://localhost:3000
 --------------------------------------
          UI: http://localhost:3001
 --------------------------------------
```

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
