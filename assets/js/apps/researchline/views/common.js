"use strict";

Instanto.module("ResearchlineApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.ResearchlineApp;
	var appName = "Researchline";
	
	/**
	 * attachValidationRules adds the client side form validation rules
	 * @param {element} form is the form that we want to attach the validation rules
	 */
	Views.attachValidationRules = function(form) {
		form.form({  
	      title: {
	        identifier: 'title',
	        rules: [
				{
		          type: 'empty',
		          prompt: 'Please enter a title'
		        },
				{
		          type: 'maxLength[200]',
		          prompt: 'Title length must be less than 200 chars'
		        }
			]
	      },
	      primaryresearcharea: {
	        identifier: 'primaryresearcharea',
	        rules: [{
	          type: 'empty',
	          prompt: 'Please select a research area'
	        }]
	      },
		  primaryleader: {
	        identifier: 'primaryleader',
	        rules: [{
	          type: 'empty',
	          prompt: 'Please select a leader'
	        }]
	      },    
	    }, {
	    	on: 'blur',
	    });
	};
});
