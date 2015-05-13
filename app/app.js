import angular from 'angular';
import bootstrap from 'angular-bootstrap';
import smartTable from 'angular-smart-table';
import lodash from 'lodash';
import * as FeedbackListModule from './views/feedback/FeedbackListModule';

angular.module('feedbackTracker', ['ui.bootstrap', 'smart-table'])
  .factory('feedbackListSvc', FeedbackListModule.svc)
  .controller('feedbackListCtrl', FeedbackListModule.ctrl);
