import angular from 'angular';

export default function(ngModule, config){

  var directiveName = config.infoDirective.name;

  ngModule.directive(directiveName, createDirectiveDefinitionObject);

  function createDirectiveDefinitionObject() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: config.baseUrl + '/info.html',
      link: function(scope, iElem, iAttrs){
        scope.angularVersion = angular.version;
        scope.config = config;
      }
    }
  }

  createDirectiveDefinitionObject.$inject = [];

}



