'use strict';

class ProjectSummaryCtrl {
	constructor ( projectSummarySvc ) {
		this.projectSummarySvc = projectSummarySvc;
		this.init();
	}

	init () {
		this.projects = [
			{
				id: "0001",
				name: "This is a project name",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
				logo: "img/logo.jpg"
			},
			{
				id: "0001",
				name: "This is a project name",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
				logo: "img/fake_logo.png"
			},
			{
				id: "0001",
				name: "This is a project name",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
				logo: "img/logo.jpg"
			}
		];

	// this.userSvc.getUsers().then(users => {
	//       	this.users = users;
	//       	console.log(users);
	//       });
	}
}

ProjectSummaryCtrl.$inject = ['projectSummarySvc'];

export { ProjectSummaryCtrl }