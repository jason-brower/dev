'use strict';

class ProjectSummaryListSvc {
	constructor($http){
		this.$http = $http;
	}

	getUsers(){
		return this.$http.get('https://api.github.com/users').then(r => r.data);
	}

	static factory($http){
    	return new ProjectSummaryListSvc($http);
    }
};

ProjectSummaryListSvc.factory.$inject = ['$http'];

export { ProjectSummaryListSvc }
