import angular from 'angular';
import config from './config';

import infoDirective from './info.directive';

export default function(ngModule, options){
  angular.merge(config, options);
  infoDirective(ngModule, config);
}
