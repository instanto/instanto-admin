"use strict";

Instanto.module("FundingbodyApp.Financedproject.Secondary.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.FundingbodyApp;
	var appName = "Fundingbody";
	
	Views.AddView = Marionette.ItemView.extend({
		template: "#" + appName.toLowerCase() + "-app-financedproject-secondary-add-template",
		ui: {
			form: "form",
			dimmer: ".dimmer",
			financedprojectInput: "#financedproject",
			recordInput: "input[name='record']",
			dropDown: ".ui.dropdown",
		},
		events: {
			"submit @ui.form": "onSubmitForm",
		},
		onRender: function() {
			this.ui.form.form({  
		      financedproject: {
		        identifier: 'financedproject',
		        rules: [{
		          type: 'empty',
		          prompt: 'Please select a financedproject'
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
			data.financed_project = parseInt(this.ui.financedprojectInput.val());
			data.record = this.ui.recordInput.val();
			Instanto.trigger("app:" + appName.toLowerCase() + ":financedprojectsecondaryadd", app.state.model_id, data);
		}
	});
});
