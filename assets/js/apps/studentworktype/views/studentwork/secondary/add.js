"use strict";

Instanto.module("StudentworktypeApp.Studentwork.Secondary.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.StudentworktypeApp;
	var appName = "Studentworktype";
	
	Views.AddView = Marionette.ItemView.extend({
		template: "#" + appName.toLowerCase() + "-app-studentwork-secondary-add-template",
		ui: {
			form: "form",
			dimmer: ".dimmer",
			studentworkInput: "#studentwork",
			dropDown: ".ui.dropdown",
		},
		events: {
			"submit @ui.form": "onSubmitForm",
		},
		onRender: function() {
			this.ui.form.form({  
		      studentwork: {
		        identifier: 'studentwork',
		        rules: [{
		          type: 'empty',
		          prompt: 'Please select a studentwork'
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
			data.studentwork = parseInt(this.ui.studentworkInput.val());
			Instanto.trigger("app:" + appName.toLowerCase() + ":studentworksecondaryadd", app.state.model_id, data);
		}
	});
});
