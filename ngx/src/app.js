import angular from 'angular';
import c1 from 'components/sample-component/_build/index';

/**************************************************************************
 * Define Angular application
 *************************************************************************/

var ngModule = angular.module('app', []);

ngModule.run(function () {
  console.log('Angular bootstrapped!');
});

/**************************************************************************
 * Initialize components and pass component specific options
 *************************************************************************/

c1(ngModule, {baseUrl: '/components/sample-component'});

/**************************************************************************
 * Guidelines
 *************************************************************************/

/**
 * To add dependencies to your Angular application:
 *
 * First install the dependency:
 * jspm install angular-ui-router
 *
 * Then instantiate ngModule like this:
 * var ngModule = angular.module('app', [
 *   'ui.router'
 * ]);
 */

/**
 * To add Angular Express components:
 *
 * First install the component:
 * ngx init component-name
 *
 * Then import the component: *
 * import componentName from 'components/component-name/_build/index';
 *
 * And instantiate it:
 * componentName(ngModule, {baseUrl: '/components/component-name'});
 */

/**
 * Use static imports to load Angular Express components:
 *
 * - avoid having to load a System.import polyfill in the browser
 * - make everything work out of the box when using jspm bundle-sfx
 *
 * When using System.import the browser will complain that System.import
 * is undefined when using a bundle-sfx (because you need to provide
 * a polyfill).
 */
