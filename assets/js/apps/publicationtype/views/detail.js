"use strict";

Instanto.module("PublicationtypeApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.PublicationtypeApp;
	var appName = "Publicationtype";
	
	Views.DetailView = Marionette.ItemView.extend({
		template: "#" + appName.toLowerCase() + "-app-detail-template",
		ui: {
			"editButton": ".js-edit",
			"showPublicationsButton": ".js-show-publications",
		},
		events: {
			"click @ui.editButton": "onClickEditButton",
			"click @ui.showPublicationsButton": "onClickShowPublicationsButton",
		},
		onClickEditButton: function(e) {
			e.preventDefault();
			Instanto.trigger("app:" + appName.toLowerCase() + ":showedit", this.model.get("model").get("id"));
		},
		onClickShowPublicationsButton: function(e) {
			e.preventDefault();
			Instanto.trigger("app:" + appName.toLowerCase() + ":showpublicationcollection", this.model.get("model").get("id"));
		},
	});
});
