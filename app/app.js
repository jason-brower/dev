import angular from 'angular';
import bootstrap from 'angular-bootstrap';
import * as UserModule from './user/user.module';

angular.module('myApp',['ui.bootstrap'])
  .factory('userSvc', UserModule.svc)
  .controller('userCtrl', UserModule.ctrl);
