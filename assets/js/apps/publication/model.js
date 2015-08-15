"use strict";

Instanto.module("PublicationApp", function(PublicationApp, Instanto, Backbone, Marionette, $, _){
	var app = PublicationApp;
	var appName = "Publication";
	
	app.Model = Backbone.Model.extend({});
	app.Collection = Backbone.Collection.extend({
		model: app.Model
	});
});
