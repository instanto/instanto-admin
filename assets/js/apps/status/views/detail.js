"use strict";

Instanto.module("StatusApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.StatusApp;
	var appName = "Status";
	
	Views.DetailView = Marionette.ItemView.extend({
		template: "#" + appName.toLowerCase() + "-app-detail-template",
		ui: {
			"editButton": ".js-edit",
			"showPrimaryMembersButton": ".js-show-primary-members",
			"showSecondaryMembersButton": ".js-show-secondary-members"
		},
		events: {
			"click @ui.editButton": "onClickEditButton",
			"click @ui.showPrimaryMembersButton": "onClickShowPrimaryMembersButton",
			"click @ui.showSecondaryMembersButton": "onClickShowSecondaryMembersButton"
		},
		onClickEditButton: function(e) {
			e.preventDefault();
			Instanto.trigger("app:" + appName.toLowerCase() + ":showedit", this.model.get("model").get("id"));
		},
		onClickShowPrimaryMembersButton: function(e) {
			e.preventDefault();
			Instanto.trigger("app:" + appName.toLowerCase() + ":showmemberprimarycollection", this.model.get("model").get("id"));
		},
		onClickShowSecondaryMembersButton: function(e) {
			e.preventDefault();
			Instanto.trigger("app:" + appName.toLowerCase() + ":showmembersecondarycollection", this.model.get("model").get("id"));
		}
	});
});