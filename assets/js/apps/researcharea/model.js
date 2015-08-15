"use strict";

Instanto.module("ResearchareaApp", function(ResearchareaApp, Instanto, Backbone, Marionette, $, _){
	var app = ResearchareaApp;
	var appName = "Researcharea";
	
	app.Model = Backbone.Model.extend({});
	app.Collection = Backbone.Collection.extend({
		model: app.Model
	});
});
