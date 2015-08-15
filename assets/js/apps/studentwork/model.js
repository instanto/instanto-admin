"use strict";

Instanto.module("StudentworkApp", function(StudentworkApp, Instanto, Backbone, Marionette, $, _){
	var app = StudentworkApp;
	var appName = "Studentwork";
	
	app.Model = Backbone.Model.extend({});
	app.Collection = Backbone.Collection.extend({
		model: app.Model
	});
});
