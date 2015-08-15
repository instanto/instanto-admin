"use strict";

Instanto.module("NewspaperApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.NewspaperApp;
	var appName = "Newspaper";
	
	Views.DetailView = Marionette.ItemView.extend({
		template: "#" + appName.toLowerCase() + "-app-detail-template",
		ui: {
			"editButton": ".js-edit",
			"showArticlesButton": ".js-show-articles",
			"uploadLogoButton": ".js-upload-logo",
			"logoInput": "#logo",
			"logoImage": "#logo-image",
			"logoPreview": "#logo-preview",
			"modal": ".ui.modal",
			"form": "form"
		},
		events: {
			"click @ui.editButton": "onClickEditButton",
			"click @ui.showArticlesButton": "onClickShowArticlesButton",
			"click @ui.uploadLogoButton": "onClickUploadLogoButton",
			"change @ui.logoInput": "onChangeLogoInput",
		},
		onChangeLogoInput: function(e) {
			e.preventDefault();
			Instanto.trigger("app:newspaper:updatelogo", this.model.get("model").get("id"), e.target.files.item(0));
		},
		onClickUploadLogoButton: function(e) {
				this.ui.logoInput.click();
		},
		onClickEditButton: function(e) {
			e.preventDefault();
			Instanto.trigger("app:" + appName.toLowerCase() + ":showedit", this.model.get("model").get("id"));
		},
		onClickShowArticlesButton: function(e) {
			e.preventDefault();
			Instanto.trigger("app:" + appName.toLowerCase() + ":showarticlecollection", this.model.get("model").get("id"));
		}
	});
});
