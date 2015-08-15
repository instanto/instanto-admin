"use strict";

Instanto.module("StudentworktypeApp.Studentwork.Secondary.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.StudentworktypeApp;
	var appName = "Studentworktype";
	
	Views.ItemView = Marionette.ItemView.extend({
		tagName: "tr",
		template: "#" + appName.toLocaleLowerCase() + "-app-studentwork-secondary-item-template",
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
			app.state.studentwork.secondary.collectionView.ui.modal.modal({
				onApprove: function() {
					var data = {};
					data.studentwork = self.model.get("id");
					Instanto.trigger("app:" + appName.toLocaleLowerCase() + ":studentworksecondaryremove", app.state.model_id, data);
				}
			}).modal("show");
		},
		onClickShowButton: function() {
			Instanto.trigger("app:studentwork:showdetail", this.model.get("model").get("id"));
		}
	});
	
	Views.CollectionView = Marionette.CompositeView.extend({
		template: "#" + appName.toLowerCase() + "-app-studentwork-secondary-collection-template",
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
			Instanto.trigger("app:" + appName.toLocaleLowerCase() + ":filterstudentworksecondary", query);
		},
		onClickAddButton: function(e) {
			Instanto.trigger("app:" + appName.toLowerCase() + ":showstudentworksecondaryadd", app.state.model_id);
		}
	});
	
});
