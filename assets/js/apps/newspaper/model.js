"use strict";

Instanto.module("NewspaperApp", function(NewspaperApp, Instanto, Backbone, Marionette, $, _){
	var app = NewspaperApp;
	var appName = "Newspaper";
	
	app.Model = Backbone.Model.extend({});
	app.Collection = Backbone.Collection.extend({
		model: app.Model
	});
});
