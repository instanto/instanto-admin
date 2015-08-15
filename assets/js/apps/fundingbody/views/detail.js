"use strict";

Instanto.module("FundingbodyApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.FundingbodyApp;
	var appName = "Fundingbody";
	
	Views.DetailView = Marionette.ItemView.extend({
		template: "#" + appName.toLowerCase() + "-app-detail-template",
		ui: {
			"editButton": ".js-edit",
			"showPrimaryFinancedprojectsButton": ".js-show-primary-financedprojects",
			"showSecondaryFinancedprojectsButton": ".js-show-secondary-financedprojects"
		},
		events: {
			"click @ui.editButton": "onClickEditButton",
			"click @ui.showPrimaryFinancedprojectsButton": "onClickShowPrimaryFinancedprojectsButton",
			"click @ui.showSecondaryFinancedprojectsButton": "onClickShowSecondaryFinancedprojectsButton"
		},
		onClickEditButton: function(e) {
			e.preventDefault();
			Instanto.trigger("app:" + appName.toLowerCase() + ":showedit", this.model.get("model").get("id"));
		},
		onClickShowPrimaryFinancedprojectsButton: function(e) {
			e.preventDefault();
			Instanto.trigger("app:" + appName.toLowerCase() + ":showfinancedprojectprimarycollection", this.model.get("model").get("id"));
		},
		onClickShowSecondaryFinancedprojectsButton: function(e) {
			e.preventDefault();
			Instanto.trigger("app:" + appName.toLowerCase() + ":showfinancedprojectsecondarycollection", this.model.get("model").get("id"));
		}
	});
});
