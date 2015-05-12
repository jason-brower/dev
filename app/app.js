import angular from 'angular';
import bootstrap from 'angular-bootstrap';
import smartTable from 'angular-smart-table';
import * as ProjectSummaryListModule from './projects/ProjectSummaryListModule';

alert('smartTable: ' + smartTable);

angular.module('feedbackTracker', ['ui.bootstrap', 'smart-table'])
  .factory('projectSummaryListSvc', ProjectSummaryListModule.svc)
  .controller('projectSummaryListCtrl', ProjectSummaryListModule.ctrl);
