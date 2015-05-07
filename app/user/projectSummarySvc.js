'use strict';

class ProjectSummarySvc {
	constructor($http){
		this.$http = $http;
	}

	getUsers(){
		return this.$http.get('https://api.github.com/users').then(r => r.data);
	}

	static factory($http){
    	return new ProjectSummarySvc($http);
    }
};

ProjectSummarySvc.factory.$inject = ['$http'];

export { ProjectSummarySvc }
