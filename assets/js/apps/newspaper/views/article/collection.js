"use strict";

Instanto.module("NewspaperApp.Article.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.NewspaperApp;
	var appName = "Newspaper";
	
	Views.ItemView = Marionette.ItemView.extend({
		tagName: "tr",
		template: "#" + appName.toLowerCase() + "-app-article-item-template",
		templateHelpers: {
			epochToDate: function(epoch) {
				var date = moment.unix(epoch)
				return date.format("YYYY-MM-DD");
			}
		},
		ui: {
			"showButton": ".js-show",
		},
		events: {
			"click @ui.showButton": "onClickShowButton",
		},
		onClickShowButton: function() {
			Instanto.trigger("app:article:showdetail", this.model.get("id"));
		}
	});
	
	Views.CollectionView = Marionette.CompositeView.extend({
		template: "#" + appName.toLowerCase() + "-app-article-collection-template",
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
			Instanto.trigger("app:" + appName.toLocaleLowerCase() + ":filterarticle", query);
		},
	});
});
