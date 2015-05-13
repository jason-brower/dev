'use strict';

class ProjectSummaryListCtrl {
	constructor ( projectSummaryListSvc ) {
		this.projectSummaryListSvc = projectSummaryListSvc;
		this.selectedProject = null;

		this.init();
	}

	setSelectedProject ( project ) {
		this.selectedProject = project;
	}

	isSelectedProject ( project ) {
		return this.selectedProject && project === this.selectedProject;
	}

	init () {

		this.projects = [
			{
				id: "0001",
				name: "This is a project name",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
				logo: "assets/img/logo.jpg"
			},
			{
				id: "0002",
				name: "This is a project name",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
				logo: "assets/img/fake_logo.png"
			},
			{
				id: "0003",
				name: "This is a project name",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
				logo: "assets/img/test.jpg"
			}
		];

	// this.userSvc.getUsers().then(users => {
	//       	this.users = users;
	//       	console.log(users);
	//       });
	}
}

ProjectSummaryListCtrl.$inject = ['projectSummaryListSvc'];

export { ProjectSummaryListCtrl }
