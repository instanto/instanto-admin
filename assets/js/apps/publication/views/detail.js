"use strict";

Instanto.module("PublicationApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.PublicationApp;
	var appName = "Publication";
	
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
