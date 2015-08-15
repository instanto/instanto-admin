"use strict";

Instanto.module("ResearchlineApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.ResearchlineApp;
	var appName = "Researchline";
	
	Views.EditView = Marionette.ItemView.extend({
		template: "#" + appName.toLocaleLowerCase() + "-app-edit-template",
		ui: {
			form: "form",
			dimmer: ".dimmer",
			titleInput: "input[name='title']",
			descriptionInput: "#description",
			descriptionPreview: "#description-preview",
			descriptionPreviewContainer: "#description-preview-container",
			descriptionContainer: "#description-container",
			tabs: ".menu.tabular .item",
			finishedInput: ".ui.radio",
			primaryresearchareaInput: "#primaryresearcharea",
		},
		events: {
			"change @ui.descriptionInput": "onChangeDescriptionInput",
			"keyup @ui.descriptionInput": "onChangeDescriptionInput",
			"submit @ui.form": "onSubmitForm",
			"click @ui.toHtmlButton": "onClickToHtmlButton",
			"click @ui.toMarkdownButton": "onClickToMarkdownButton",
		},
		onShow: function() {
			this.ui.tabs.tab();
			var converter = new Markdown.getSanitizingConverter();
			Markdown.Extra.init(converter, {highlighter: "prettify"});
			var md = this.ui.descriptionInput.val();
			var html = converter.makeHtml(md);
			this.ui.descriptionPreview.empty().append(html);
			prettyPrint();
			
			this.ui.descriptionPreviewContainer.hide();
			this.ui.finishedInput.checkbox();
			this.ui.primaryresearchareaInput.dropdown();
			Views.attachValidationRules(this.ui.form);
		},
		onClickToHtmlButton: function(e) {
			e.preventDefault();
			this.ui.descriptionContainer.hide();
			this.ui.descriptionPreviewContainer.show();
		},
		onClickToMarkdownButton: function(e) {
			e.preventDefault();
			this.ui.descriptionContainer.show();
			this.ui.descriptionPreviewContainer.hide();
		},
		onChangeDescriptionInput: function() {
			var converter = new Markdown.getSanitizingConverter();
			Markdown.Extra.init(converter, {highlighter: "prettify"});
			var md = this.ui.descriptionInput.val();
			var html = converter.makeHtml(md);
			this.ui.descriptionPreview.empty().append(html);
			prettyPrint();
		},
		onSubmitForm: function(e) {
			e.preventDefault();
			var data = {};
			data.title = this.ui.titleInput.val();
			data.description = this.ui.descriptionInput.val();
			data.finished = this.$el.find(":radio:checked").val() === 'true' ? true : false; 
			data.primary_research_area = parseInt(this.ui.primaryresearchareaInput.val());
			Instanto.trigger("app:" + appName.toLocaleLowerCase() + ":edit", this.model.get("model").get("id"), data);
		}
	});

});
