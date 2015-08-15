"use strict";

Instanto.module("ResearchareaApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.ResearchareaApp;
	var appName = "Researcharea";
	
	Views.DetailView = Marionette.ItemView.extend({
		template: "#" + appName.toLowerCase() + "-app-detail-template",
		ui: {
			"editButton": ".js-edit",
			"showPrimaryResearchlinesButton": ".js-show-primary-researchlines",
			"showSecondaryResearchlinesButton": ".js-show-secondary-researchlines",
			"uploadLogoButton": ".js-upload-logo",
			"logoInput": "#logo",
			"logoImage": "#logo-image",
			"logoPreview": "#logo-preview",
			"modal": ".ui.modal",
			"form": "form"
		},
		events: {
			"click @ui.editButton": "onClickEditButton",
			"click @ui.showPrimaryResearchlinesButton": "onClickShowPrimaryResearchlinesButton",
			"click @ui.showSecondaryResearchlinesButton": "onClickShowSecondaryResearchlinesButton",
			"click @ui.uploadLogoButton": "onClickUploadLogoButton",
			"change @ui.logoInput": "onChangeLogoInput",
		},
		onClickEditButton: function(e) {
			e.preventDefault();
			Instanto.trigger("app:" + appName.toLowerCase() + ":showedit", this.model.get("model").get("id"));
		},
		onClickShowPrimaryResearchlinesButton: function(e) {
			e.preventDefault();
			Instanto.trigger("app:" + appName.toLowerCase() + ":showresearchlineprimarycollection", this.model.get("model").get("id"));
		},
		onClickShowSecondaryResearchlinesButton: function(e) {
			e.preventDefault();
			Instanto.trigger("app:" + appName.toLowerCase() + ":showresearchlinesecondarycollection", this.model.get("model").get("id"));
		},
		onChangeLogoInput: function(e) {
			e.preventDefault();
			Instanto.trigger("app:researcharea:updatelogo", this.model.get("model").get("id"), e.target.files.item(0));
		},
		onClickUploadLogoButton: function(e) {
				this.ui.logoInput.click();
		},
	});
});
