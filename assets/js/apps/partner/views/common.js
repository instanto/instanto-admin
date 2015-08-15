"use strict";

Instanto.module("PartnerApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.PartnerApp;
	var appName = "Partner";
	
	/**
	 * attachValidationRules adds the client side form validation rules
	 * @param {element} form is the form that we want to attach the validation rules
	 */
	Views.attachValidationRules = function(form) {
		form.form({  
	      name: {
	        identifier: 'name',
	        rules: [{
	          type: 'empty',
	          prompt: 'Please enter a name'
	        }]
		  }
	    }, {
	    	on: 'blur',
	    });
	};
});
