"use strict";

Instanto.module("NewspaperApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.NewspaperApp;
	var appName = "Newspaper";
	
	Views.CreateView = Marionette.ItemView.extend({
		template: "#" + appName.toLowerCase() + "-app-create-template",
		ui: {
			form: "form",
			dimmer: ".dimmer",
			nameInput: "#name",
		},
		events: {
			"submit @ui.form": "onSubmitForm"
		},
		onRender: function() {
			Views.attachValidationRules(this.ui.form);
			
		},
		onSubmitForm: function(e) {
			e.preventDefault();
			var data = {};
			data.name = this.ui.nameInput.val();
			Instanto.trigger("app:" + appName.toLowerCase() + ":create", data);
		}
	});

});
