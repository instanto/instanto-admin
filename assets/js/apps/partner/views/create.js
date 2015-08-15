"use strict";

Instanto.module("PartnerApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.PartnerApp;
	var appName = "Partner";
	
	Views.CreateView = Marionette.ItemView.extend({
		template: "#" + appName.toLowerCase() + "-app-create-template",
		ui: {
			form: "form",
			dimmer: ".dimmer",
			nameInput: "input[name='name']",
			webInput: "input[name='web']",
			scopeInput: ".ui.radio"
		},
		events: {
			"submit @ui.form": "onSubmitForm"
		},
		onRender: function() {
			this.ui.scopeInput.checkbox();
			Views.attachValidationRules(this.ui.form);
			
		},
		onSubmitForm: function(e) {
			e.preventDefault();
			var data = {};
			data.name = this.ui.nameInput.val();
			data.web = this.ui.webInput.val();
			data.scope = this.$el.find(":radio:checked").val();
			Instanto.trigger("app:" + appName.toLowerCase() + ":create", data);
		}
	});

});
