
"use strict";

/**
 * AuthApp is the application which manage all the logic related to authentication
 */
Instanto.module("AuthApp", function(AuthApp, Instanto, Backbone, Marionette, $, _) {
	this.startWithParent = false;
    var app = AuthApp;
	var appName = "Auth";
	
	app.state = {};
	
	app.Model = Backbone.Model.extend({});
	
    app.Controller = {
			setUser: function(token) {
				var user = jwt_decode(token);
				console.log(user);
				app.state.model = new app.Model(user);
				localStorage.setItem("app:auth:user", user);
			},
			getUser: function() {
				return app.state.model;
			},
			isLoggedIn: function() {
				var user = localStorage.getItem("app:auth:user");
				if (!user) {
					return false;
				} else {
					// AJAX call to /api/auth/validate
					//if(ajax) {
						// return true
					//} else {
						// return false 
					//}
				}
			}
		};
		
		Instanto.on("app:auth:setuser", function(token) {
			return app.Controller.setUser(token);
		});
		
		Instanto.reqres.setHandler("app:auth:getuser", function() {
			return app.Controller.getUser();
		});
});