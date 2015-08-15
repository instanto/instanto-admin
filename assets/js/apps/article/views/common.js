"use strict";

Instanto.module("ArticleApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.ArticleApp;
	var appName = "Article";
	
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
	      newspaper: {
	        identifier: 'newspaper',
	        rules: [{
	          type: 'empty',
	          prompt: 'Please enter a newspaper'
	        }]
	      },      
	    }, {
	    	on: 'blur',
	    });
	};
});
