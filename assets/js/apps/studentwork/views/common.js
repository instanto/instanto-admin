"use strict";

Instanto.module("StudentworkApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.StudentworkApp;
	var appName = "Studentwork";
	
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
	      studentworktype: {
	        identifier: 'studentworktype',
	        rules: [{
	          type: 'empty',
	          prompt: 'Please enter a student work type'
	        }]
	      },      
		  author: {
	        identifier: 'author',
	        rules: [{
	          type: 'empty',
	          prompt: 'Please enter an author'
	        }]
	      },   
	    }, {
	    	on: 'blur',
	    });
	};
});
