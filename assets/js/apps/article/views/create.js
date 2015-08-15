"use strict";

Instanto.module("ArticleApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.ArticleApp;
	var appName = "Article";
	
	Views.CreateView = Marionette.ItemView.extend({
		template: "#" + appName.toLowerCase() + "-app-create-template",
		templateHelpers: {
			epochToDate: function(epoch) {
				var date = moment.unix(epoch)
				return date.format("YYYY-MM-DD");
			}
		},
		ui: {
			form: "form",
			dimmer: ".dimmer",
			titleInput: "#title",
			webInput: "#web",
			dateInput: "#date",
			newspaperInput: "#newspaper",
		},
		events: {
			"submit @ui.form": "onSubmitForm"
		},
		onRender: function() {
			this.ui.newspaperInput.dropdown();
			Views.attachValidationRules(this.ui.form);
		},
		onSubmitForm: function(e) {
			e.preventDefault();
			var data = {};
			data.title = this.ui.titleInput.val();
			data.web = this.ui.webInput.val();
			data.date = new Date(this.ui.dateInput.val()).getTime()/1000;
			data.newspaper = parseInt(this.ui.newspaperInput.val());
			Instanto.trigger("app:" + appName.toLowerCase() + ":create", data);
		}
	});

});
