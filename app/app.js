import angular from 'angular';
import bootstrap from 'angular-bootstrap';
import * as ProjectSummaryModule from './user/ProjectSummaryModule';

angular.module('feedbackTracker', ['ui.bootstrap'])
  .factory('projectSummarySvc', ProjectSummaryModule.svc)
  .controller('projectSummaryCtrl', ProjectSummaryModule.ctrl);
