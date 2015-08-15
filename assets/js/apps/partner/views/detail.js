"use strict";

Instanto.module("PartnerApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.PartnerApp;
	var appName = "Partner";
	
	Views.DetailView = Marionette.ItemView.extend({
		template: "#" + appName.toLowerCase() + "-app-detail-template",
		ui: {
			"editButton": ".js-edit",
			"showMembersButton": ".js-show-members",
			"uploadLogoButton": ".js-upload-logo",
			"logoInput": "#logo",
			"logoImage": "#logo-image",
			"logoPreview": "#logo-preview",
			"modal": ".ui.modal",
			"form": "form"
		},
		events: {
			"click @ui.editButton": "onClickEditButton",
			"click @ui.showMembersButton": "onClickShowMembersButton",
			"click @ui.uploadLogoButton": "onClickUploadLogoButton",
			"change @ui.logoInput": "onChangeLogoInput",
		},
		onChangeLogoInput: function(e) {
			e.preventDefault();
			Instanto.trigger("app:partner:updatelogo", this.model.get("model").get("id"), e.target.files.item(0));
		},
		onClickUploadLogoButton: function(e) {
				this.ui.logoInput.click();
		},
		onClickEditButton: function(e) {
			e.preventDefault();
			Instanto.trigger("app:" + appName.toLowerCase() + ":showedit", this.model.get("model").get("id"));
		},
		onClickShowMembersButton: function(e) {
			e.preventDefault();
			Instanto.trigger("app:" + appName.toLowerCase() + ":showmembercollection", this.model.get("model").get("id"));
		}
	});
});
