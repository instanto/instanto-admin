"use strict";

Instanto.module("ResearchareaApp.Researchline.Secondary.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.ResearchareaApp;
	var appName = "Researcharea";
	
	Views.AddView = Marionette.ItemView.extend({
		template: "#" + appName.toLowerCase() + "-app-researchline-secondary-add-template",
		ui: {
			form: "form",
			dimmer: ".dimmer",
			researchlineInput: "#researchline",
			recordInput: "input[name='record']",
			dropDown: ".ui.dropdown",
		},
		events: {
			"submit @ui.form": "onSubmitForm",
		},
		onRender: function() {
			this.ui.form.form({  
		      researchline: {
		        identifier: 'researchline',
		        rules: [{
		          type: 'empty',
		          prompt: 'Please select a researchline'
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
			data.financed_project = parseInt(this.ui.researchlineInput.val());
			data.record = this.ui.recordInput.val();
			Instanto.trigger("app:" + appName.toLowerCase() + ":researchlinesecondaryadd", app.state.model_id, data);
		}
	});
});
