"use strict";

Instanto.module("FinancedprojectApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.FinancedprojectApp;
	var appName = "Financedproject";
	
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
		  started: {
	        identifier: 'started',
	        rules: [
				{
		          type: 'empty',
		          prompt: 'Please enter the start date'
		        }
			]
	      },  
		  ended: {
	        identifier: 'ended',
	        rules: [
				{
		          type: 'empty',
		          prompt: 'Please enter the end date'
		        }
			]
	      },       
	      primaryfundingbody: {
	        identifier: 'primaryfundingbody',
	        rules: [{
	          type: 'empty',
	          prompt: 'Please select a funding body'
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
