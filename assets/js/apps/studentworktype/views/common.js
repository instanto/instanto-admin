"use strict";

Instanto.module("StudentworktypeApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.StudentworktypeApp;
	var appName = "Studentworktype";
	
	/**
	 * attachValidationRules adds the client side form validation rules
	 * @param {element} form is the form that we want to attach the validation rules
	 */
	Views.attachValidationRules = function(form) {
		form.form({  
	      name: {
	        identifier: 'name',
	        rules: [
				{
		          type: 'empty',
		          prompt: 'Please enter a name'
		        },
				{
		          type: 'maxLength[200]',
		          prompt: 'Name length must be less than 200 chars'
		        }
			]
	      },       
	      description: {
	        identifier: 'description',
	        rules: [{
	          type: 'maxLength[200]',
	          prompt: 'Description length must be less than 200 chars'
	        }]
	      },      
	    }, {
	    	on: 'blur',
	    });
	};
});
