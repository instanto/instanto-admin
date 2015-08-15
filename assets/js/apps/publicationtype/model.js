"use strict";

Instanto.module("PublicationtypeApp", function(PublicationtypeApp, Instanto, Backbone, Marionette, $, _){
	var app = PublicationtypeApp;
	var appName = "Publicationtype";
	
	app.Model = Backbone.Model.extend({});
	app.Collection = Backbone.Collection.extend({
		model: app.Model
	});
});
