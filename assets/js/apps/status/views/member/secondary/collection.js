"use strict";

Instanto.module("StatusApp.Member.Secondary.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.StatusApp;
	var appName = "Status";
	
	Views.ItemView = Marionette.ItemView.extend({
		tagName: "tr",
		template: "#" + appName.toLocaleLowerCase() + "-app-member-secondary-item-template",
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
			app.state.member.secondary.collectionView.ui.modal.modal({
				onApprove: function() {
					var data = {};
					data.member = self.model.get("id");
					Instanto.trigger("app:" + appName.toLocaleLowerCase() + ":membersecondaryremove", app.state.model_id, data);
				}
			}).modal("show");
		},
		onClickShowButton: function() {
			Instanto.trigger("app:member:showdetail", this.model.get("model").get("id"));
		}
	});
	
	Views.CollectionView = Marionette.CompositeView.extend({
		template: "#" + appName.toLowerCase() + "-app-member-secondary-collection-template",
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
			Instanto.trigger("app:" + appName.toLocaleLowerCase() + ":filtermembersecondary", query);
		},
		onClickAddButton: function(e) {
			Instanto.trigger("app:" + appName.toLowerCase() + ":showmembersecondaryadd", app.state.model_id);
		}
	});
	
});