"use strict";

Instanto.module("StudentworktypeApp.Studentwork.Primary.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.StudentworktypeApp;
	var appName = "Studentworktype";
	
	Views.ItemView = Marionette.ItemView.extend({
		tagName: "tr",
		template: "#" + appName.toLowerCase() + "-app-studentwork-primary-item-template",
		ui: {
			"showButton": ".js-show",
		},
		events: {
			"click @ui.showButton": "onClickShowButton",
		},
		onClickShowButton: function() {
			Instanto.trigger("app:studentwork:showdetail", this.model.get("model").get("id"));
		}
	});
	
	Views.CollectionView = Marionette.CompositeView.extend({
		template: "#" + appName.toLowerCase() + "-app-studentwork-primary-collection-template",
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
			Instanto.trigger("app:" + appName.toLocaleLowerCase() + ":filterstudentworkprimary", query);
		},
	});
});
