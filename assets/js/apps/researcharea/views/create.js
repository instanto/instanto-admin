"use strict";

Instanto.module("ResearchareaApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.ResearchareaApp;
	var appName = "Researcharea";
	
	Views.CreateView = Marionette.ItemView.extend({
		template: "#" + appName.toLowerCase() + "-app-create-template",
		ui: {
			form: "form",
			dimmer: ".dimmer",
			nameInput: "input[name='name']",
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
