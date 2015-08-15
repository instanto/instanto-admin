"use strict"

Instanto.module("LoginApp", function(LoginApp, Instanto, Backbone, Marionette, $, _) {
	LoginApp.Controller = {
		login: function(username, password) {
			LoginApp.view.ui.dimmer.addClass("active");
			setTimeout(function() {
				var loging = Instanto.request("api:auth:login", username, password);
				$.when(loging).done(function(data) {
					localStorage.setItem("auth_token", data);
					Instanto.trigger("app:auth:setuser", data);
					location.reload();
				});
				$.when(loging).fail(function(data, status) {
					LoginApp.view.ui.form.addClass("error");
					LoginApp.view.ui.form.form("add errors", ["username/password does not match"]);
				});
				$.when(loging).always(function() {
					LoginApp.view.ui.dimmer.removeClass("active");
				});
			},2000);
			
		}
	};

	Instanto.on("app:login:login", function(username, password) {
		return LoginApp.Controller.login(username, password);
	});
});