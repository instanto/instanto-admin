"use strict";

Instanto.module("StatusApp", function(StatusApp, Instanto, Backbone, Marionette, $, _){
	var app = StatusApp;
	var appName = "Status";
	
	app.Model = Backbone.Model.extend({});
	app.Collection = Backbone.Collection.extend({
		model: app.Model
	});
});