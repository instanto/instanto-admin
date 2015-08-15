"use strict";

Instanto.module("FundingbodyApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.FundingbodyApp;
	var appName = "Fundingbody";
	
	Views.ItemView = Marionette.ItemView.extend({
		tagName: "tr",
		template: "#" + appName.toLowerCase() + "-app-item-template",
		ui: {
			"showButton": ".js-show",
			"editButton": ".js-edit",
			"deleteButton": ".js-delete",
			
		},
		events: {
			"click @ui.showButton": "onClickShowButton",
			"click @ui.editButton": "onClickEditButton",
			"click @ui.deleteButton": "onClickDeleteButton"
		},
		onClickShowButton: function() {
			Instanto.trigger("app:" + appName.toLowerCase() + ":showdetail", this.model.get("id"));
		},
		onClickEditButton: function() {
			Instanto.trigger("app:" + appName.toLowerCase() + ":showedit", this.model.get("id"));
		},
		onClickDeleteButton: function() {
			var self = this;
			app.state.collectionView.ui.modal.modal({
				onApprove: function() {
					Instanto.trigger("app:" + appName.toLowerCase() + ":delete", self.model.get("id"));
				}
			}).modal("show");
		}
	});
	
	Views.CollectionView = Marionette.CompositeView.extend({
		childView: Views.ItemView,
		childViewContainer: "tbody",
		template: "#" + appName.toLowerCase() + "-app-collection-template",
		ui: {
			"createButton": ".js-create",
			"searchInput": ".js-search",
			"table": ".ui.table",
			"modal": ".ui.modal"
		},
		events: {
			"keyup @ui.searchInput": "onKeyupSearchInput",
			"click @ui.createButton": "onClickCreateButton"
		},
		onShow: function() {
			var self = this;
			app.state.collection.on("add remove", function(e){
				self.ui.table.trigger("update");
			});
		},
		onKeyupSearchInput: function(e) {
			var query = this.ui.searchInput.val();
			Instanto.trigger("app:" + appName.toLowerCase() + ":filter", query);
		},
		onClickCreateButton: function(e) {
			Instanto.trigger("app:" +  appName.toLowerCase() + ":showcreate");
		}
	});
});
