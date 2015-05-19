'use strict';

class FeedbackListCtrl {
	constructor ($http) {
		this.selectedProject = null;
		this.$http = $http;
		this.feedback = [];
		this.displayedFeedback = [];

		this.init();
	}

	setSelectedProject ( project ) {
		this.selectedProject = project;
	}

	isSelectedProject ( project ) {
		return project.isSelected;
	}

	debug() {
		console.log(JSON.stringify(this.feedback));
	}

	init () {
		this.$http.get('api/feedback/getAllFeedback').then(r => {
			this.feedback = r.data;
			this.displayedFeedback = [].concat(this.feedback);
		});
	}
}

FeedbackListCtrl.$inject = ['$http'];

export { FeedbackListCtrl }
