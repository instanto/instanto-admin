"use strict";

Instanto.module("ResearchlineApp", function(ResearchlineApp, Instanto, Backbone, Marionette, $, _){
	var app = ResearchlineApp;
	var appName = "Researchline";
	
	app.Model = Backbone.Model.extend({});
	app.Collection = Backbone.Collection.extend({
		model: app.Model
	});
});
