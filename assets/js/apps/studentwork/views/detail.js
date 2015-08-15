"use strict";

Instanto.module("StudentworkApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.StudentworkApp;
	var appName = "Studentwork";
	
	Views.DetailView = Marionette.ItemView.extend({
		template: "#" + appName.toLowerCase() + "-app-detail-template",
		ui: {
			"editButton": ".js-edit",
		},
		events: {
			"click @ui.editButton": "onClickEditButton",
		},
		onClickEditButton: function(e) {
			e.preventDefault();
			Instanto.trigger("app:" + appName.toLowerCase() + ":showedit", this.model.get("model").get("id"));
		},
	});
});
