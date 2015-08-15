"use strict"

Instanto.module("LoginApp", function(LoginApp, Instanto, Backbone, Marionette, $, _) {
	
	LoginApp.View = Marionette.ItemView.extend({
		tagName: "div",
		className: "container",
		attributes: {
			id: "login-app"
		},
		template: "#login-app-template",
		ui: {
			form: "form",
			dimmer: ".dimmer",
			username: "#username",
			password: "#password"
		},
		onRender: function() {
				// validation rules
				this.ui.form.form({  
			      username: {
			        identifier: 'username',
			        rules: [{
			          type: 'empty',
			          prompt: 'Please enter your username'
			        }]
			      },       
			      password: {
			        identifier: 'password',
			        rules: [{
			          type: 'empty',
			          prompt: 'Please enter a password'
			        },{
			          type: 'length[2]',
			          prompt: 'Password needs to be at least 2 characters long'
			        }]
			      },       
			    }, {
			    	on: 'blur',
			    });
		},
		events: {
			"submit @ui.form": "onSubmitForm"
		},
		onSubmitForm: function(e) {
			event.preventDefault();
			var valid = this.ui.form.form('validate form');
			if (valid) {
				var username = this.ui.username.val();
				var password = this.ui.password.val();
				Instanto.trigger("app:login:login", username, password);
			}
		}
	});
});