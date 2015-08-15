"use strict";

Instanto.module("PublicationApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.PublicationApp;
	var appName = "Publication";
	
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
		  year: {
	        identifier: 'year',
	        rules: [
				{
		          type: 'empty',
		          prompt: 'Please enter a year'
		        },
			]
	      },  
	      publicationtype: {
	        identifier: 'publicationtype',
	        rules: [{
	          type: 'empty',
	          prompt: 'Please enter a publication type'
	        }]
	      },      
		  primaryauthor: {
	        identifier: 'primaryauthor',
	        rules: [{
	          type: 'empty',
	          prompt: 'Please enter an author'
	        }]
	      },
		  publisher: {
	        identifier: 'publisher',
	        rules: [{
	          type: 'empty',
	          prompt: 'Please enter a publisher'
	        }]
	      },       
	    }, {
	    	on: 'blur',
	    });
	};
});
