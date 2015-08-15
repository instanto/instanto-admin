"use strict";

Instanto.module("PublicationtypeApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.PublicationtypeApp;
	var appName = "Publicationtype";
	
	Views.EditView = Marionette.ItemView.extend({
		template: "#" + appName.toLocaleLowerCase() + "-app-edit-template",
		ui: {
			form: "form",
			dimmer: ".dimmer",
			nameInput: "#name",
			descriptionInput: "#description"
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
			data.description = this.ui.descriptionInput.val();
			Instanto.trigger("app:" + appName.toLocaleLowerCase() + ":edit", this.model.get("model").get("id"), data);
		}
	});

});
