"use strict";

Instanto.module("ResearchareaApp.Researchline.Secondary.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.ResearchareaApp;
	var appName = "Researcharea";
	
	Views.ItemView = Marionette.ItemView.extend({
		tagName: "tr",
		template: "#" + appName.toLocaleLowerCase() + "-app-researchline-secondary-item-template",
		ui: {
			"showButton": ".js-show",
			"removeButton": ".js-remove"
		},
		events: {
			"click @ui.removeButton": "onClickRemoveButton",
			"click @ui.showButton": "onClickShowButton"
		},
		onClickRemoveButton: function() {
			var self = this;
			app.state.researchline.secondary.collectionView.ui.modal.modal({
				onApprove: function() {
					var data = {};
					data.financed_project = self.model.get("id");
					Instanto.trigger("app:" + appName.toLocaleLowerCase() + ":researchlinesecondaryremove", app.state.model_id, data);
				}
			}).modal("show");
		},
		onClickShowButton: function() {
			Instanto.trigger("app:researchline:showdetail", this.model.get("id"));
		}
	});
	
	Views.CollectionView = Marionette.CompositeView.extend({
		template: "#" + appName.toLowerCase() + "-app-researchline-secondary-collection-template",
		childView: Views.ItemView,
		childViewContainer: "tbody",
		ui: {
			"addButton": ".js-add",
			"searchInput": ".js-search",
			"table": ".ui.table",
			"modal": ".ui.modal"
		},
		events: {
			"keyup @ui.searchInput": "onKeyupSearchInput",
			"click @ui.createButton": "onClickCreateButton",
			"click @ui.addButton": "onClickAddButton",
		},
		onKeyupSearchInput: function(e) {
			var query = this.ui.searchInput.val();
			Instanto.trigger("app:" + appName.toLocaleLowerCase() + ":filterresearchlinesecondary", query);
		},
		onClickAddButton: function(e) {
			Instanto.trigger("app:" + appName.toLowerCase() + ":showresearchlinesecondaryadd", app.state.model_id);
		}
	});
	
});
