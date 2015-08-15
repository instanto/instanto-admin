"use strict";

Instanto.module("PublisherApp", function(PublisherApp, Instanto, Backbone, Marionette, $, _){
	var app = PublisherApp;
	var appName = "Publisher";
	
	app.Model = Backbone.Model.extend({});
	app.Collection = Backbone.Collection.extend({
		model: app.Model
	});
});
