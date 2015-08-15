"use strict";

Instanto.module("StudentworktypeApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.StudentworktypeApp;
	var appName = "Studentworktype";
	
	Views.DetailView = Marionette.ItemView.extend({
		template: "#" + appName.toLowerCase() + "-app-detail-template",
		ui: {
			"editButton": ".js-edit",
			"showStudentworksButton": ".js-show-studentworks",
		},
		events: {
			"click @ui.editButton": "onClickEditButton",
			"click @ui.showStudentworksButton": "onClickShowStudentworksButton",
		},
		onClickEditButton: function(e) {
			e.preventDefault();
			Instanto.trigger("app:" + appName.toLowerCase() + ":showedit", this.model.get("model").get("id"));
		},
		onClickShowStudentworksButton: function(e) {
			e.preventDefault();
			Instanto.trigger("app:" + appName.toLowerCase() + ":showstudentworkcollection", this.model.get("model").get("id"));
		},
	});
});
