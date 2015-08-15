"use strict"

Instanto.module("LoginApp", function(LoginApp, Instanto, Backbone, Marionette, $, _) {
	this.startWithParent = false;

	LoginApp.on("start", function() {
		var view = new Instanto.LoginApp.View;
		LoginApp.view = view;
		Instanto.getRegion("main").show(view);
	});
});
