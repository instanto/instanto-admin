"use strict";

Instanto.module("ResearchlineApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.ResearchlineApp;
	var appName = "Researchline";
	
	Views.DetailView = Marionette.ItemView.extend({
		template: "#" + appName.toLowerCase() + "-app-detail-template",
		templateHelpers: {
			epochToDate: function(epoch) {
				var date = moment.unix(epoch)
				return date.format("YYYY-MM-DD");
			}
		},
		ui: {
			"accordion": ".ui.accordion",
			"descriptionPreview": "#description-preview",
			"editButton": ".js-edit",
			"showPrimaryMembersButton": ".js-show-primary-members",
			"showSecondaryMembersButton": ".js-show-secondary-members",
			"uploadLogoButton": ".js-upload-logo",
			"logoInput": "#logo",
			"logoImage": "#logo-image",
			"logoPreview": "#logo-preview",
			"modal": ".ui.modal",
			"form": "form"
		},
		events: {
			"click @ui.editButton": "onClickEditButton",
			"click @ui.showPrimaryMembersButton": "onClickShowPrimaryMembersButton",
			"click @ui.showSecondaryMembersButton": "onClickShowSecondaryMembersButton",
			"click @ui.uploadLogoButton": "onClickUploadLogoButton",
			"change @ui.logoInput": "onChangeLogoInput",
		},
		onShow: function() {
			this.ui.accordion.accordion();
			var converter = new Markdown.getSanitizingConverter();
			Markdown.Extra.init(converter, {highlighter: "prettify"});
			var md = this.ui.descriptionPreview.html();
			var html = converter.makeHtml(md);
			this.ui.descriptionPreview.empty().append(html);
			prettyPrint();	
		},
		onChangeLogoInput: function(e) {
			e.preventDefault();
			Instanto.trigger("app:researchline:updatelogo", this.model.get("model").get("id"), e.target.files.item(0));
		},
		onClickUploadLogoButton: function(e) {
				this.ui.logoInput.click();
		},
		onClickEditButton: function(e) {
			e.preventDefault();
			Instanto.trigger("app:" + appName.toLowerCase() + ":showedit", this.model.get("model").get("id"));
		},
		onClickShowPrimaryMembersButton: function(e) {
			e.preventDefault();
			Instanto.trigger("app:" + appName.toLowerCase() + ":showmemberprimarycollection", this.model.get("model").get("id"));
		},
		onClickShowSecondaryMembersButton: function(e) {
			e.preventDefault();
			Instanto.trigger("app:" + appName.toLowerCase() + ":showmembersecondarycollection", this.model.get("model").get("id"));
		}
	});
});
