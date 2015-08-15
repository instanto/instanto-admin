"use strict";

Instanto.module("StatusApp.Member.Secondary.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.StatusApp;
	var appName = "Status";
	
	Views.AddView = Marionette.ItemView.extend({
		template: "#" + appName.toLowerCase() + "-app-member-secondary-add-template",
		ui: {
			form: "form",
			dimmer: ".dimmer",
			memberInput: "#member",
			dropDown: ".ui.dropdown",
		},
		events: {
			"submit @ui.form": "onSubmitForm",
		},
		onRender: function() {
			this.ui.form.form({  
		      member: {
		        identifier: 'member',
		        rules: [{
		          type: 'empty',
		          prompt: 'Please select a member'
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
			data.member = parseInt(this.ui.memberInput.val());
			Instanto.trigger("app:" + appName.toLowerCase() + ":membersecondaryadd", app.state.model_id, data);
		}
	});
});