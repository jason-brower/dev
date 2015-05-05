'use strict';

class UserCtrl {
	constructor(userSvc) {
		this.userSvc = userSvc;
		this.init();
    }

    init(){

			this.users = [
				{
					id: "jason",
					login: "Something and another"
				}

			];

			// this.userSvc.getUsers().then(users => {
      //       	this.users = users;
      //       	console.log(users);
      //       });
    }
}

UserCtrl.$inject = ['userSvc'];

export { UserCtrl }
