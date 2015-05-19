'use strict';

class FeedbackListCtrl {
	constructor () {
		this.selectedFeedback = null;
		this.init();
	}

	setSelectedFeedback( feedback ) {
		this.selectedFeedback = feedback;
	}

	init () {
		this.feedback = [];
		while (this.feedback.length < 100) {
			this.feedback.push({
					id: this.feedback.length,
					description: "C Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
			});
		}
	}
}

FeedbackListCtrl.$inject = [];

export { FeedbackListCtrl }
