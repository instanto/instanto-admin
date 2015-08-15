"use strict";

Instanto.module("StudentworktypeApp", function(StudentworktypeApp, Instanto, Backbone, Marionette, $, _){
	var app = StudentworktypeApp;
	var appName = "Studentworktype";
	
	app.Model = Backbone.Model.extend({});
	app.Collection = Backbone.Collection.extend({
		model: app.Model
	});
});
