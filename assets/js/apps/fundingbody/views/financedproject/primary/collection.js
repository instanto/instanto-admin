"use strict";

Instanto.module("FundingbodyApp.Financedproject.Primary.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.FundingbodyApp;
	var appName = "Fundingbody";
	
	Views.ItemView = Marionette.ItemView.extend({
		tagName: "tr",
		template: "#" + appName.toLowerCase() + "-app-financedproject-primary-item-template",
		ui: {
			"showButton": ".js-show",
		},
		events: {
			"click @ui.showButton": "onClickShowButton",
		},
		onClickShowButton: function() {
			Instanto.trigger("app:financedproject:showdetail", this.model.get("id"));
		}
	});
	
	Views.CollectionView = Marionette.CompositeView.extend({
		template: "#" + appName.toLowerCase() + "-app-financedproject-primary-collection-template",
		childView: Views.ItemView,
		childViewContainer: "tbody",
		ui: {
			"searchInput": ".js-search",
			"table": ".ui.table"
		},
		events: {
			"keyup @ui.searchInput": "onKeyupSearchInput",
			"click @ui.createButton": "onClickCreateButton"
		},
		onKeyupSearchInput: function(e) {
			var query = this.ui.searchInput.val();
			Instanto.trigger("app:" + appName.toLocaleLowerCase() + ":filterfinancedprojectprimary", query);
		},
	});
});
