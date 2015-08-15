"use strict";

Instanto.module("PublisherApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.PublisherApp;
	var appName = "Publisher";
	
	Views.DetailView = Marionette.ItemView.extend({
		template: "#" + appName.toLowerCase() + "-app-detail-template",
		ui: {
			"editButton": ".js-edit",
			"showPublicationsButton": ".js-show-publications",
			"form": "form"
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
		}
	});
});
