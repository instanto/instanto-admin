"use strict";

Instanto.module("PublicationtypeApp.Publication.Secondary.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.PublicationtypeApp;
	var appName = "Publicationtype";
	
	Views.AddView = Marionette.ItemView.extend({
		template: "#" + appName.toLowerCase() + "-app-publication-secondary-add-template",
		ui: {
			form: "form",
			dimmer: ".dimmer",
			publicationInput: "#publication",
			dropDown: ".ui.dropdown",
		},
		events: {
			"submit @ui.form": "onSubmitForm",
		},
		onRender: function() {
			this.ui.form.form({  
		      publication: {
		        identifier: 'publication',
		        rules: [{
		          type: 'empty',
		          prompt: 'Please select a publication'
		        }]
		      }     
		    }, {
		    	on: 'blur',
		    });
			this.ui.dropDown.dropdown();
		},
		onSubmitForm: function(e) {
			e.preventDefault();
			var data = {};
			data.publication = parseInt(this.ui.publicationInput.val());
			Instanto.trigger("app:" + appName.toLowerCase() + ":publicationsecondaryadd", app.state.model_id, data);
		}
	});
});
