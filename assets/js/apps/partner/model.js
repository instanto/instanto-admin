"use strict";

Instanto.module("PartnerApp", function(PartnerApp, Instanto, Backbone, Marionette, $, _){
	var app = PartnerApp;
	var appName = "Partner";
	
	app.Model = Backbone.Model.extend({});
	app.Collection = Backbone.Collection.extend({
		model: app.Model
	});
});
