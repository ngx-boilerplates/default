import angular from 'angular';
import config from './config';

export default function(ngModule, options){
  angular.merge(config, options);
  ngModule.run(logMessage);
};

function logMessage($log) {
  $log.info('Sample component is working!');
}

logMessage.$inject = ['$log'];
