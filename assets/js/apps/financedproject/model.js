"use strict";

Instanto.module("FinancedprojectApp", function(FinancedprojectApp, Instanto, Backbone, Marionette, $, _){
	var app = FinancedprojectApp;
	var appName = "Financedproject";
	
	app.Model = Backbone.Model.extend({});
	app.Collection = Backbone.Collection.extend({
		model: app.Model
	});
});
