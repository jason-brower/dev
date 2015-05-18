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

		// this.feedback = [];
		//
		// while (this.feedback.length < 100) {
		// 	this.feedback.push({
		// 			id: this.feedback.length,
		// 			description: "C Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
		// 	});
		// }
	}
}

FeedbackListCtrl.$inject = ['$http'];

export { FeedbackListCtrl }
